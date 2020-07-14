import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { PointOfContact } from "../../../models/point-of-contact/point-of-contact";
import { EmailMessage } from "../../../models/email-message/email-message";
import { RECIPIENTS } from "./recipients";
import { ContactService } from "../../../services/contact.service";
import { Observable } from "rxjs";
import { AutoUnsubscribe } from "../../../auto-unsubscribe";
import { MessageSentService } from "../../../services/message-sent.service";
import { Router } from "@angular/router";
import { SenderService } from "../../../services/sender.service";
import { StubSenderService } from "../../../services/stub-sender.service";
import { FakeSenderService } from "../../../services/fake-sender.service";

import { isEmptyObject } from "../../../utils/general";
import { NameRegex, EmailRegex } from "../../../constants/validation";
import { BaseComponent } from "../../base/base.component";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
  providers: [
    {
      provide: SenderService,
      useClass: ContactService,
    },
  ],
})
@AutoUnsubscribe
export class ContactComponent extends BaseComponent {
  title = "Contact";

  contacts = RECIPIENTS;

  pointOfContact: PointOfContact = RECIPIENTS[0];
  emailMessage: EmailMessage;

  emailSender: Observable<any>;

  @ViewChild("submitBtn") submitBtn: ElementRef;

  // TODO: get rid of this
  formError = "";

  // NOTE: Angular FORCES us to do this. You cannot access utils from anywhere other than the controller.
  isEmptyObject = isEmptyObject;

  constructor(
    private senderService: SenderService,
    private messageSentService: MessageSentService,
    private router: Router
  ) {
    super();
    // define our models in here
    this.emailMessage = new EmailMessage();
    this.emailMessage.recipient = RECIPIENTS[0];
  }

  ngAfterViewChecked() {
    // if there are no errors, scroll the button into view
    if (!Object.keys(this.Errors).length && this.submitBtn.nativeElement) {
      this.submitBtn.nativeElement.scrollIntoView();
    }
  }

  /**
   * @todo put in an `onDone` callback of the signature (err, res), or of signature (success)
   */
  sendEmail() {
    this.showLoader();
    // do the request
    this.emailSender = this.senderService.send(this.emailMessage);
    this.emailSender.subscribe(
      (res) => {
        this.hideLoader();
        if (res.code === 200) {
          // post the data to the "Message Sent" service
          this.messageSentService.announceMessageSent(res.message);
          // navigate straight to the success page
          this.router.navigateByUrl("/contact/messageSent").then((val) => {
            // TODO: invoke onDone() in here
          });
        } else {
          this.handleError(res.message);
        }
      },
      (err) => {
        this.hideLoader();
        this.handleError(err.message);
      }
    );
  }

  private handleError(cause: string) {
    //  show error message either somewhere in the form or as a modal
    this.formError = cause;
  }

  /**
   * @todo refactor this using Validator classes
   */
  get Errors() {
    let errorObj = {};

    if (this.emailMessage.subject == "")
      errorObj["Subject"] = "Subject is required";

    if (this.emailMessage.sender.name == "")
      errorObj["Name"] = "Please enter your name";
    else if (!this.emailMessage.sender.name.match(NameRegex))
      errorObj["Name"] = "That name is invalid";

    if (this.emailMessage.sender.email == "")
      errorObj["Email"] = "Email is required";
    else if (!this.emailMessage.sender.email.match(EmailRegex))
      errorObj["Email"] = "Please enter valid email";

    if (!this.emailMessage.message) errorObj["Message"] = "Message is required";

    return errorObj;
  }
}
