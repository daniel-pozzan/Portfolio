import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
import { Background } from 'src/models/background';
import { Effect } from 'src/models/effect';



@Component({
  selector: 'app-head-section',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
    
        query('.left', [
          style({opacity: 0, transform: 'translateX(-300px)'}),
          stagger(1500, [
            animate('250ms', style({
              opacity:1, transform: 'translateX(0)'
            }))
          ])
        ])

      ])
    ])
  ],
  templateUrl: './head-section.component.html',
  styleUrls: ['./head-section.component.scss']
})
export class HeadSectionComponent implements OnInit {
  canvas;
  home;
  ctx: CanvasRenderingContext2D | null;
  width;
  height;
  background;
  animationFrame: number;
  effect: Effect;

  path = ['down.png', 'downhover.png'];
  img = this.path[0];
  visible= false;
  constructor() { }

  ngOnInit(): void {
    this.visible = true;
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.home = document.getElementById('home');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.home.offsetWidth;
    this.canvas.height = this.home.offsetHeight;
    // this.background = new Background(this.ctx, this.canvas.width, this.canvas.height);
    // this.background.animate();

    // Canvas Setting
    this.ctx.fillStyle = 'white';
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 1;

    this.effect = new Effect(this.canvas.width, this.canvas.height);
    this.animate = this.animate.bind(this);  
    this.animate(); 
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.effect.render(this.ctx);
    this.animationFrame = requestAnimationFrame(this.animate);
  }

  bluegreenColor(){
    this.img = this.path[1]
  }

  whiteColor(){
    this.img = this.path[0];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // this.background.cancelFrame();
    cancelAnimationFrame(this.animationFrame)
    this.canvas.width = this.home.offsetWidth;
    this.canvas.height = this.home.offsetHeight;
    // this.background = new Background(this.ctx, this.canvas.width, this.canvas.height);
    this.effect = new Effect(this.canvas.width, this.canvas.height);
    // this.background.animate();
    this.animate();
  }
  

}
