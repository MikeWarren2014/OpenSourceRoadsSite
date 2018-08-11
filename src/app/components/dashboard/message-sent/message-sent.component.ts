import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-sent',
  templateUrl: './message-sent.component.html',
  styleUrls: ['./message-sent.component.css']
})
export class MessageSentComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
