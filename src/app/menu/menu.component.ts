import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  path = ['logo.png', 'logohover.png'];
  img = this.path[0];
  menuOpened = false;
  @Input() borderMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  purpleColor(){
    this.img = this.path[1];
  }

  whiteColor(){
    this.img = this.path[0];
  }

  openMenu() {
    if(this.menuOpened == false) {
      document.getElementById('listCase')?.classList.remove('translate-200px');
      document.getElementById('listCase')?.classList.remove('d-none');
      document.getElementById('menuIcon')?.classList.add('bluegreen-color');
      this.menuOpened = true;
    } else {
      document.getElementById('listCase')?.classList.add('translate-200px');
      document.getElementById('listCase')?.classList.add('d-none');
      document.getElementById('menuIcon')?.classList.remove('bluegreen-color');
      this.menuOpened = false;
    }
  }



}
