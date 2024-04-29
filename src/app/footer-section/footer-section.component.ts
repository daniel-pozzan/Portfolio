import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss']
})
export class FooterSectionComponent implements OnInit {
  @Input() borderMode = false;
  constructor() { }

  ngOnInit(): void {
  }

}
