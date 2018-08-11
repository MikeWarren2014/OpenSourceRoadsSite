import { Component, OnInit, OnChanges } from '@angular/core';
import { PointOfContact } from './point-of-contact';
import { EmailMessage } from './email-message';
import { RECIPIENTS } from './recipients';
import { Person } from './person';
import { ContactService } from '../../../services/contact.service';
import { Observable } from 'rxjs';
import { AutoUnsubscribe } from '../../../auto-unsubscribe';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
@AutoUnsubscribe
export class ContactComponent implements OnInit {

  title = 'Contact';
  
  contacts = RECIPIENTS;


  pointOfContact : PointOfContact = RECIPIENTS[0];
  emailMessage   : EmailMessage = EmailMessage.EMPTY_FIELDS;

  emailSender : Observable<EmailMessage>;

  constructor(private contactService : ContactService) { }

  ngOnInit() {
  }


  clearFields() { 

  }

  sendEmail() { 
    this.emailSender = (this.contactService
      .send(this.emailMessage))
    this.emailSender.subscribe(console.log)
      // TODO: on success, go to "messageSent", posting the data there
  }
}