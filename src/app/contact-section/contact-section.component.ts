import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendSuccess() {
    document.getElementById('sendedEmail')?.classList.remove('d-none');
    alert('Thank you for your message! I will get in contact with you as soon as possible.');
  }

}
