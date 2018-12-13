import { Component, OnInit, OnChanges } from '@angular/core';
import { PointOfContact } from './point-of-contact';
import { EmailMessage } from './email-message';
import { RECIPIENTS } from './recipients';
import { Person } from './person';
import { ContactService } from '../../../services/contact.service';
import { Observable } from 'rxjs';
import { AutoUnsubscribe } from '../../../auto-unsubscribe';
import { MessageSentService } from '../../../services/message-sent.service';
import { Router } from '@angular/router';
import { SenderService } from '../../../services/sender.service';
import { StubSenderService } from '../../../services/stub-sender.service';
import { FakeSenderService } from '../../../services/fake-sender.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [MessageSentService,
    { 
      provide : SenderService,
      useClass : FakeSenderService
    }]
})
@AutoUnsubscribe
export class ContactComponent implements OnInit {

  title = 'Contact';
  
  contacts = RECIPIENTS;

  // is the form submitting?
  formSubmitting = false

  pointOfContact : PointOfContact = RECIPIENTS[0];
  emailMessage   : EmailMessage = EmailMessage.EMPTY_FIELDS;

  emailSender : Observable<any>;

  formError = "";

  constructor(private senderService : SenderService,
    private messageSentService : MessageSentService,
    private router : Router) { }

  ngOnInit() {
  }


  clearFields() { 

  }

  sendEmail() { 
    // first thing we should do is disable the button
    this.formSubmitting = true;
    // if the user entered invalid input, handle it
    if (/^([a-z]@[a-z]).[a-z]$/.test(this.emailMessage.sender.email)) { 
      this.handleError("Bad email")
      return;
    }
    this.emailSender = (this.senderService
      .send(this.emailMessage))
    this.emailSender
      .subscribe(res => {
        console.log(res)
        if (res.code === 200) { 
          // re-enable the button 
          this.formSubmitting = false;
          // post the data to the "Message Sent" service"
          this.messageSentService.announceMessageSent(res.message)
          // navigate straight to the success page
          this.router.navigateByUrl('/contact/messageSent')
            .then((val) => { 
              if (!val) { 
                console.error("redirect failed.")
              }
              else {
                console.log("Should be redirecting any second now...")
              }
            })
        }
        else {
          this.handleError(res.message)
        }
      })
  }
    
  private handleError(cause : string) { 
    // re-enable the button
    this.formSubmitting = false;
    //  show error message either somewhere in the form or as a modal
    this.formError = cause;
  }
}