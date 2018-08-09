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
<<<<<<< HEAD
        return this.http.post<EmailMessage>(
            "https://script.google.com/macros/s/AKfycbyEuvROpXUEi4wTX4N06nqF6oHlwihVc9Ut6-OG04zPi5yuOCzn/exec",
            JSON.stringify(message)
=======
        return this.http.post<EmailMessage>(this.baseURL,
            JSON.stringify(message)    
>>>>>>> 294ca062721460d65b2f2a12a5b9ed4e9ca3e898
        );
    }
}