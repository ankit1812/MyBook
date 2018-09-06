import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { UserService } from '../user.service';
import { User } from './profile.model';
import { AuthService } from '../auth.service';
import { ProfileUpdatedService } from '../profile-updated.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
public id:number;
public username:string;
public user;
  constructor(private _route:ActivatedRoute,private _UserService:UserService,private _authService:AuthService,private _profileUpdated:ProfileUpdatedService) {
    // this.user  = new User();
    
    this._profileUpdated.profileUpdated.subscribe(res =>{
      this.user=res;
      
    })
   }
   isAuthorUsedProfile(){
     return +this.id == +this._authService.getAuthUserId();
   }
  ngOnInit() {
    this._route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      
    })
    if(JSON.parse(localStorage.getItem('user')).id == this.id){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    else{
       this._UserService.getUserById(this.id).subscribe(res => {
        this.user = res.json();
        // console.log(res);
       });
      
      // console.log(JSON.parse(localStorage.getItem('user')).id);
    }
  }
  

}
