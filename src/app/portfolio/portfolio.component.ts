import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('toggle', [

      state('active', style({backgroundColor: '#FA2759'})),

      state('inactive', style({backgroundColor: 'transparent'})),

      transition('active <=> inactive', animate('100ms ease-in-out'))
     
    ]),

    trigger('fadeInOutRight', [

      transition(':leave', [
        style({transform: 'scale(1.0) translateX(0)'}),
        animate('1s ease-out', keyframes([
          style({transform:'scale(1.02) translateX(0)', offset:0.2}),
          style({transform:'scale(1.04) translateX(0)', offset:0.4}),
          style({transform: 'scale(1.04) translateX(400px)', offset:0.8})
        ]))
      ]),

      transition(':enter', [
        style({transform: 'scale(1.04) translateX(400px)'}),
        animate('1s ease-in-out', keyframes([
          style({transform: 'scale(1.04) translateX(400px)', offset: 0.2}),
          style({trasnform: 'scale(1.02) translateX(0)', offset: 0.4}),
          style({transform: 'scale(1) translateX(0)', offset: 0.8})
        ]))
      ])
    ]),

    trigger('fadeInOutLeft', [

      transition(':leave', [
        style({transform: 'translateX(0)', opacity: 1}),
        animate('0.5s ease-out', keyframes([
          style({transform:'translateX(0)',opacity: 1, offset:0.2}),
          style({transform:'translateX(0)',opacity:0.5, offset:0.4}),
          style({transform: 'translateX(-400px)',opacity:0,  offset:1})
        ]))
      ]),

      transition(':enter', [
        style({transform: 'translateX(-400px)', opacity:0}),
        animate('0.5s ease-in-out', keyframes([
          style({transform: 'translateX(-400px)', opacity:0, offset: 0.2}),
          style({trasnform: 'translateX(0)', opacity:0.5,  offset: 0.4}),
          style({transform: 'translateX(0)',opacity:1,  offset: 1})
        ]))
      ])
    ]),

    

  ],
})
  

export class PortfolioComponent implements OnInit {
  elPolloLoco = new Project('El Pollo Loco', 'Javascript', 'JavaScript - based jump and run game.');
  join = new Project('Join', 'Javascript', 'Javascript - a business SCRUM based app.');
  ringOfFire = new Project('Ring Of Fire', 'Angular', 'Angular - the popular cards game.');
  portfolio = new Project('My Portfolio', 'Angular', 'Angular - my personal website.');
  javascript:boolean = true;
  angular:boolean = true;

  ngOnInit(): void {
  }
  
  projects = [
    this.elPolloLoco,
    this.join,
    this.ringOfFire,
    this.portfolio
  ]

  allIsActive:string = 'active';
  angularIsActive:string = 'inactive';
  javascriptIsActive:string = 'inactive';


  toggleAllIsActive(){
    if(this.angularIsActive === 'active' || this.javascriptIsActive === 'active'){
      this.allIsActive = 'active'; 
      this.angularIsActive = 'inactive';
      this.javascriptIsActive = 'inactive';
    }

  }

  toggleAngularIsActive(){
    this.angularIsActive = this.angularIsActive === 'inactive' ? 'active' : 'inactive';
    this.javascriptIsActive = 'inactive';
    if(this.angularIsActive === 'inactive'){
      this.allIsActive = 'active';
      this.getAll();
    } else {
      this.allIsActive = 'inactive';
    }
  }

  toggleJavascriptIsActive(){
    this.javascriptIsActive = this.javascriptIsActive === 'inactive' ? 'active' : 'inactive';
    this.angularIsActive = 'inactive';
    if(this.javascriptIsActive === 'inactive'){
      this.allIsActive = 'active';
      this.getAll();
    } else {
      this.allIsActive = 'inactive';
    }
  }

  getJavascript(){
    this.javascript = true;
    setTimeout(()=> {
      this.angular = false; 

    }, 500)
  }

  getAngular(){
    this.angular = true;
    setTimeout(() => {
      this.javascript = false;

    }, 500)
  }

  getAll(){
    this.javascript = true;
    this.angular = true;
  }

}

class Project {
  title = '';
  language = '';
  sentence = '';

  constructor(title:string, language:string, sentence:string){
    this.title = title;
    this.language = language;
    this.sentence = sentence;
  }
}
