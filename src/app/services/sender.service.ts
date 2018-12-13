import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EmailMessage } from "../components/dashboard/contact/email-message";

@Injectable()
export abstract class SenderService{
    abstract send(message : EmailMessage) : Observable<any>;
}