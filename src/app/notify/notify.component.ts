import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../notify.service';
import { Message } from '../classes/Message';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
public message:Message;
  constructor(private _notifyService:NotifyService) { 
    this._notifyService.newMessageRecieved.subscribe((message)=>this.newMessageRecieved(message));
  }
newMessageRecieved(message:Message){
this.message=message;
setTimeout(() =>{
this.message = new Message('' , '');
},2000)
}
  ngOnInit() {
  }

}
