import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import {FormControl, Validators} from '@angular/forms';
import { JokesService } from '../jokes.service';
import { NotifyService } from '../notify.service';
@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
@Input() joke;
@Output() jokeDeleted =new EventEmitter()
 editing:boolean=false;
title:FormControl;
content:FormControl;
  constructor(private _authService:AuthService,private _jokeService:JokesService,private _notifyService:NotifyService) { }

  ngOnInit() {
    this.title=new FormControl(this.joke.title,Validators.required)
    this.content=new FormControl(this.joke.joke,Validators.required)

  }
canModify():boolean{
  return this.joke.user.id == this._authService.getAuthUserId()
}
edit(){
  this.editing = true;
}
updateJoke(){
  this._jokeService.updateJoke(+this.joke.id,{
    title:this.title.value,
    content:this.content.value
  }).subscribe(res =>{
    console.log(res);
    this.joke=res.json();
    this.editing = false
    window.scrollTo(0,0)
    this._notifyService.notify('Jokes Updated','success');
  })
}
cancel(){
  this.title.reset();
  this.content.reset();
  this.editing = false
}
delete(){
  this._jokeService.delete(+this.joke.id).subscribe(res =>{
    console.log(res);
    this.jokeDeleted.emit(this.joke.id);
    
  })
}
}
