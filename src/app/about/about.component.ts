import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  aboutBox = [
    new BottomBox('./assets/img/icons/walk.png', 
    'MY JOURNEY BEGAN',
    'As a food specialist, I have always been keen on nutritional science. So I decided to study Food Technology and turn my passion into a job.'),

    new BottomBox('./assets/img/icons/heart.png', 
    'MY FIRST EXPERIENCES',
    'I started to work in the food industry and develop my knowledge about processes and engines. This contact with technology inspired me to become a Fronted Web Developer.'),

    new BottomBox('./assets/img/icons/search.png', 
    'MY SEARCH',
    'I have always been fascinated by computers since I got my first windows 95. I had my first contact with programming during an informatic course, and I understood that programming was the right job for me.'),

    new BottomBox('./assets/img/icons/airplane.png', 
    'FOR THE FUTURE',
    'After that, I followed a structured training where I got practical experiences in many projects and professional feedback from experienced developers. Now I feel ready to start my new journey as a Junior Software Developer, get new bits of knowledge, and push boundaries.'),
  ];
  
  constructor() { }
  
  ngOnInit(): void {
  }

  
  
}

export class BottomBox{
  path:string = '';
  h4:string = '';
  p:string = '';

  constructor(path:string, h4:string, p:string){
    this.path = path;
    this.h4 = h4;
    this.p = p;
  }
}