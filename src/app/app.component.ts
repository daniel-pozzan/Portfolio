import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // title = 'daniel-pozzan';

  ngOnInit(): void {
   
  }
  

  constructor(public router:Router){}
  
  detectScrollY(){
    console.log(window.scrollY);
  } 
  
}
