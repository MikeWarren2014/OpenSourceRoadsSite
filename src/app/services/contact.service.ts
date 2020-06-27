import { Injectable } from "@angular/core";
import { EmailMessage } from "../models/email-message/email-message";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { SenderService } from "./sender.service";


@Injectable()
export class ContactService implements SenderService{ 
    baseURL : string = 'http://52.14.150.196/';
    

    constructor(private http : HttpClient) { 

    }

    send(message : EmailMessage) : Observable<any> { 
        return this.http.post<any>(
            "https://script.google.com/macros/s/AKfycbyEuvROpXUEi4wTX4N06nqF6oHlwihVc9Ut6-OG04zPi5yuOCzn/exec",
            JSON.stringify({ data : message })
        )
    }
}