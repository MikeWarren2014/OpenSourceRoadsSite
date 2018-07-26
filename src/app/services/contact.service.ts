import { Injectable } from "@angular/core";
import { EmailMessage } from "../components/dashboard/contact/email-message";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ContactService { 
    baseURL : string = 'http://52.14.150.196/';

    constructor(private http : HttpClient) { 

    }

    send(message : EmailMessage) : Observable<EmailMessage> { 
        return this.http.post<EmailMessage>(this.baseURL,
            JSON.stringify(message)    
        );
    }
}