import { SenderService } from "./sender.service";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from 'rxjs/operators';
import { EmailMessage } from "../models/email-message/email-message";


@Injectable()
export class FakeSenderService implements SenderService{
    send(message : EmailMessage) : Observable<any> {
        // wait a random amount of time between .5 seconds and 5 seconds
        const delayTime = 500 + (Math.random() * 1000 * 4.5);

        // message better have a sender,subject,recipient
        if ((!EmailMessage.isValidEmail(message.sender.email)) ||
            (!EmailMessage.isValidEmail(message.recipient.email)) ||
            (!message.subject) ||
            (!message.message)) {
                console.log(message.sender.email)
                console.log(message.recipient.email)
                console.log(message.subject)
                console.log(message.message)
                console.log("Sender valid? ", EmailMessage.isValidEmail(message.sender.email))
                console.log("Recipient valid? ", EmailMessage.isValidEmail(message.recipient.email))
                console.log(JSON.stringify(message, null, '\t'))
                return of(false).pipe(delay(delayTime));
            }
        console.log("sending success message...")
        return of({
            status: "ok",
            code: 200,
            message: "Your message has been sent! Expect a response in a week. "
        }).pipe(delay(delayTime));
    }
}
