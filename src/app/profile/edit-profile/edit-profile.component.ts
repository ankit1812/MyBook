import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { UserService } from '../../user.service';
import { NotifyService } from '../../notify.service';
import { ProfileUpdatedService } from '../../profile-updated.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user:any;
  constructor(private _authService:AuthService,private _user:UserService,private _notify:NotifyService,private _profileUpdated:ProfileUpdatedService) { }

  ngOnInit() {
    this.user = this._authService.getAuthUser();
  }
  editProfile(){
    this._user.updateProfile(this.user.name,this.user.email).subscribe(res =>{
      console.log(res);
      if(res.ok == true){
        localStorage.setItem('user',JSON.stringify(res.json().data));
        this._profileUpdated.profileUpdate(res.json().data);
        this._notify.notify('Profile Succeassfully Updated','success');
      }
       
      
        
    })
  }
}
