import { Injectable } from '@angular/core';
import {CONFIG} from './config/config';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';
import { Router } from '../../node_modules/@angular/router';
import { NotifyService } from './notify.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:Http,private _router:Router,private _notify:NotifyService,private _spinner:NgxSpinnerService) {
    console.log(CONFIG.API_URL);
   }
  register(data):Observable<any>{
   return this._http.post(`${CONFIG.API_URL}/register`,data);

  }
  login(email:string,password:string):Observable<any>{
    this._spinner.show();
    return this._http.post(`${CONFIG.API_URL}/authenticate`,{email:email,password:password});
    
  }

  getToken():string{
      return  localStorage.getItem('tokens');
      

      
  }
  isLoggedIn():boolean{
let token = localStorage.getItem('tokens');
let user = localStorage.getItem('user');
if(user && token)
  return true 
return false


  }
  logout(){
    localStorage.removeItem('tokens');
    localStorage.removeItem('user');
    this._router.navigate(['/auth/login']);
  }
  getAuthUser(){
    return JSON.parse(localStorage.getItem('user'));
  }
 getAuthUserId():number
 {
   return JSON.parse(localStorage.getItem('user')).id;
 }
}
