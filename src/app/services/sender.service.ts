import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EmailMessage } from "../models/email-message/email-message";

@Injectable()
export abstract class SenderService{
    abstract send(message : EmailMessage) : Observable<any>;
}