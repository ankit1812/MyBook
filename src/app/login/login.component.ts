import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '../../../node_modules/@angular/router';
import { NotifyService } from '../notify.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  active:boolean=false;
  constructor(private _authService:AuthService,private _router:Router,private _notify:NotifyService,private _spinner:NgxSpinnerService) { }
public email:string;
public password:string;
  ngOnInit() {
    if(localStorage.getItem('remind')){
      this.active=!this.active
      this.email = JSON.parse(atob(localStorage.getItem('remind'))).email;
      this.password = JSON.parse(atob(localStorage.getItem('remind'))).password;
    }
  }
login(form:NgForm){
  // form.value.active == undefined? form.value.active = false:form.value.active = true;
  console.log(form.value);
  
    this._authService.login(form.value.email,form.value.password).subscribe(res=>{
    if(res.ok == true){
      if(this.active == true){
        localStorage.setItem('remind',btoa(JSON.stringify(form.value)));
      }
      else if(this.active == false){
        localStorage.removeItem('remind')
      }
      
      // alert('Login Successful');
      let token=res.json().token
      let user=res.json().user.data
      localStorage.setItem('tokens',token);
      localStorage.setItem('user',JSON.stringify(user));
      
      
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this._spinner.hide();
        this._router.navigate(['/dashboard']);
      this._notify.notify('SuccessFully Logged in','success');
    }, 3000);
    
    
    }
  },
err => {
  // alert(err.json().error);
  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this._spinner.hide();
    this._notify.notify('Invalid Credentials','error');
 
}, 1500);

});
  
}
}
