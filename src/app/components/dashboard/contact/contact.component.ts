import { Component, OnInit, OnChanges } from '@angular/core';
import { PointOfContact } from './point-of-contact';
import { EmailMessage } from './email-message';
import { RECIPIENTS } from './recipients';
import { Person } from './person';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = 'Contact';

  pointOfContact : PointOfContact = RECIPIENTS[0];
  emailMessage   : EmailMessage = EmailMessage.EMPTY_FIELDS;

  constructor() { }

  ngOnInit() {
  }


  clearFields() { 

  }

  sendEmail() { 
    console.log(JSON.stringify(this.emailMessage, null, '\t'));
  }
}