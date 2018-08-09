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
<<<<<<< HEAD

  pointOfContact : PointOfContact = RECIPIENTS[0];
  emailMessage   : EmailMessage = EmailMessage.EMPTY_FIELDS;
  contacts       = RECIPIENTS;
=======
  
  contacts = RECIPIENTS;


  pointOfContact : PointOfContact = RECIPIENTS[0];
  emailMessage   : EmailMessage = EmailMessage.EMPTY_FIELDS;
>>>>>>> 294ca062721460d65b2f2a12a5b9ed4e9ca3e898

  constructor() { }

  ngOnInit() {
  }


  clearFields() { 

  }

  sendEmail() { 
    console.log(JSON.stringify(this.emailMessage, null, '\t'));
  }
}