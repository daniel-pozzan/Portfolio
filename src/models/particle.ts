import { Effect } from "./effect";

export class Particle {
    effect: Effect;
    x: number;
    y: number;
    speedX: number;
    speedY: number;
    history: [{x: number, y: number}];
    maxLength: number;
    angle: number;
    speedModifier: number;
    timer: number;
    color: string;
    colors: string[];

    constructor(effect: Effect){
        this.effect = effect;
        // Math floor rounded to the minor integer
        this.x = Math.floor(Math.random() * effect.width);
        this.y = Math.floor(Math.random() * effect.height);
        this.speedModifier = Math.floor(Math.random() * 5 + 1);
        this.history = [{x: this.x, y: this.y}];
        this.maxLength = Math.floor(Math.random() * 200 + 10);
        this.angle = 0;
        this.timer = this.maxLength * 2;
        this.colors = ['#712C83', '#79358A', '#79358A', '#9A6EA6', '#A883B1'];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];

    }

    draw(context: CanvasRenderingContext2D | null) {
        // context.fillRect(this.x, this.y, 10, 10);
        context.beginPath();
        context.moveTo(this.history[0].x, this.history[0].y);

        for(let i = 0; i < this.history.length; i++) {
            context.lineTo(this.history[i].x, this.history[i].y);
        }
        context.strokeStyle = this.color;
        context.stroke();
    }

    update() {
        this.timer--;
        
        if(this.timer >= 1){
            let x = Math.floor(this.x / this.effect.cellSize); // In which column is the particel
            let y = Math.floor(this.y / this.effect.cellSize); // In wich row is the particel
            let index = y * this.effect.cols + x;
            this.angle = this.effect.flowField[index];
            this.speedX = Math.cos(this.angle);
            this.speedY = Math.sin(this.angle);
    
            this.x = this.x + this.speedX * this.speedModifier;
            this.y = this.y + this.speedY * this.speedModifier;
            // this.x = this.x + this.speedX + Math.sin(this.angle) * 10;
            // this.y = this.y + this.speedY + Math.cos(this.angle) * 7;
            this.history.push({x: this.x, y: this.y});
            if(this.history.length > this.maxLength){
                this.history.shift();
            }
        } else if (this.history.length > 1) {
            this.history.shift();
        } else {
            this.reset();
        }
    }

    reset() {
        this.x = Math.floor(Math.random() * this.effect.width);
        this.y = Math.floor(Math.random() * this.effect.height);
        this.history = [{x: this.x, y: this.y}];
        this.timer = this.maxLength * 2;
    }
}