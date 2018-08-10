import { Component, OnInit, OnChanges } from '@angular/core';
import { PointOfContact } from './point-of-contact';
import { EmailMessage } from './email-message';
import { RECIPIENTS } from './recipients';
import { Person } from './person';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = 'Contact';
  
  contacts = RECIPIENTS;


  pointOfContact : PointOfContact = RECIPIENTS[0];
  emailMessage   : EmailMessage = EmailMessage.EMPTY_FIELDS;

  constructor(private contactService : ContactService) { }

  ngOnInit() {
  }


  clearFields() { 

  }

  sendEmail() { 
    this.contactService
      .send(this.emailMessage)
      .subscribe(console.log)
  }
}