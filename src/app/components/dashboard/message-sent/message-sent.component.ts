import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageSentService } from '../../../services/message-sent.service';
import { AutoUnsubscribe } from '../../../auto-unsubscribe';

@Component({
  selector: 'app-message-sent',
  templateUrl: './message-sent.component.html',
  styleUrls: ['./message-sent.component.css']
})
@AutoUnsubscribe
export class MessageSentComponent implements OnInit {

  message: string;

  subscription : Subscription;

  constructor(private messageSentService: MessageSentService) { 
    this.subscription = this.messageSentService
      .messageSent
      .subscribe(message => { this.message = message;})
  }

  ngOnInit() {
  }

}
