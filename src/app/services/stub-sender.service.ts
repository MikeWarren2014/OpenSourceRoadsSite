import { SenderService } from "./sender.service";
import { Injectable } from "@angular/core";
import { EmailMessage } from "../components/dashboard/contact/email-message";
import { Observable, of } from "rxjs";

@Injectable()
export class StubSenderService implements SenderService{
    send(message : EmailMessage) : Observable<any> { 
        return of({
            code: 200,
            message: "Your message has been sent!",
            status: "ok"
        })
    }
}