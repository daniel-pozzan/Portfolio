export class Background {
    ctx;
    width;
    height;
    radius;
    velocityRadius;
    gradient;
    lengthX;
    lengthY;
    animationFrame;
  
    

    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.createGradient();
        this.ctx.strokeStyle = this.gradient;
        this.ctx.lineWidth = 2;
        this.radius = 0;
        this.velocityRadius = 0.006;
        this.lengthX = 120;
        this.lengthY = 22;
        // this.animate();
    }

    draw(x, y, angle) {
        
        
        
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + Math.cos(angle)*this.lengthX, y + Math.sin(angle)*this.lengthY);
        this.ctx.stroke();
    }

    animate() {
        
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.radius += this.velocityRadius;
        if(this.radius > 5 || this.radius < -5) this.velocityRadius *= -1;
        for(let y = 0; y < this.height; y += 20) {
            for(let x = 0; x < this.width; x += 20) {
                const angle = (Math.cos(x * 0.01) + Math.sin(y * 0.01)) * this.radius;
                this.draw(x, y, angle);

            }
        }
        
        this.animationFrame = requestAnimationFrame(this.animate.bind(this));
    }

    cancelFrame() {
        cancelAnimationFrame(this.animationFrame);
    }

    createGradient() {
        this.gradient = this.ctx.createLinearGradient(0 ,0 , this.width, this.height);
        this.gradient.addColorStop('0.1', '#ff5c33');
        this.gradient.addColorStop('0.2', '#ff66b3');
        this.gradient.addColorStop('0.4', '#ccccff');
        this.gradient.addColorStop('0.6', '#b3ffff');
        this.gradient.addColorStop('0.8', '#80ff80');
        this.gradient.addColorStop('0.9', '#ffff33');
    }
}