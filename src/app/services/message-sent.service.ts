import { Injectable } from "@angular/core";

import * as Rx from "rxjs";

// code obtained from : https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service

@Injectable()
export class MessageSentService { 
    // services, solely to announce the message has been successfully sent
    private messageSentService = new Rx.ReplaySubject<string>(1);
    
    // Observable string streams
    public get messageSent() { return this.messageSentService.asObservable(); }

    // service message command
    announceMessageSent(successMessage : string) { 
        this.messageSentService.next(successMessage);
    }

    announceMessageFail() { 
        this.messageSentService.next();
    }
}