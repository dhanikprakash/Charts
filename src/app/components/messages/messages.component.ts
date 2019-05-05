import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/common/message-service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService) {}

  ngOnInit() {
  }

}