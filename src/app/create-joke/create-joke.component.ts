import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder,Validators} from '@angular/forms';
import { JokesService } from '../jokes.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-create-joke',
  templateUrl: './create-joke.component.html',
  styleUrls: ['./create-joke.component.css']
})
export class CreateJokeComponent implements OnInit {
public jokeForm:FormGroup
  constructor(private fb:FormBuilder,private _jokeService:JokesService,private _router:Router,private _authService:AuthService) {
    this.createForm();
   }
   createForm(){
     this.jokeForm = this.fb.group({
       title : ['',[Validators.required]],
       content: ['',[Validators.required,Validators.minLength(5)]]
     })
   }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.jokeForm.value);
    this._jokeService.createJoke(this.jokeForm.value).subscribe(res =>{
      this._router.navigate(['/user/profile',this._authService.getAuthUserId()]);
      
    })
  }

}
