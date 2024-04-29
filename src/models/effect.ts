
import { Particle } from "./particle";

export class Effect {
    width: number;
    height: number;
    particles: Particle[];
    numberOfParticles: number;
    cellSize: number;
    rows: number;
    cols: number;
    flowField: number[];
    curve: number;
    zoom: number;
    debug: boolean;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.particles = [];
        this.numberOfParticles = 2000;
        this.cellSize = 20;
        this.flowField = [];
        this.curve = 5;
        this.zoom = 0.03;
        this.debug = false;
        this.init();

        window.addEventListener('keydown', e => {
            if(e.key === 'd') this.debug = !this.debug;
        })

    }

    init(){
        // Create Flow Fields (Grid system)
        this.rows = Math.floor(this.height / this.cellSize);
        this.cols = Math.floor(this.width / this.cellSize);
        this.flowField = [];
        for(let y = 0; y < this.rows; y++){
            for(let x = 0; x < this.cols; x++){
                let angle = (Math.cos(x * this.zoom) + Math.sin(y * this.zoom)) * this.curve;
                this.flowField.push(angle);
            }
        }

        // Create particles
        for(let i = 0; i < this.numberOfParticles; i++) {
            this.particles.push(new Particle(this));
        }
    }

    drawGrid(context: CanvasRenderingContext2D | null) {
        context.save();
        context.strokeStyle = 'red';
        context.lineWidth= 0.3;
        for(let c = 0; c < this.cols; c++){
            context.beginPath();
            context.moveTo(this.cellSize * c, 0);
            context.lineTo(this.cellSize * c, this.height);
            context.stroke();
        }

        for(let r = 0; r < this.rows; r++){
            context.beginPath();
            context.moveTo(0, this.cellSize * r);
            context.lineTo(this.width, this.cellSize * r);
            context.stroke();
        }

        context.restore();
    }

    render(context: CanvasRenderingContext2D | null){
        if(this.debug) this.drawGrid(context);
        this.particles.forEach(particle => {
            particle.draw(context);
            particle.update();
        })
    }
}