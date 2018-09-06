import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http,Headers,RequestOptions } from '../../node_modules/@angular/http';
import {CONFIG} from './config/config'
import { Observable } from '../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private headers:Headers
  constructor(private _authService:AuthService,private _http:Http) { 
    console.log(CONFIG.API_URL);
    this.headers = new Headers({'Authorization': `Bearer ${this._authService.getToken()}`});
  }
  getUserById(id:any):Observable<any>{
    // if(id == this._authService.getAuthUserId()){
    //   return this._authService.getAuthUser()
    // }
    let options = new RequestOptions({headers:this.headers});
    return this._http.get(`${CONFIG.API_URL}/user/`+id,options);
  }
  updateProfile(name:string,email:string):Observable<any>{
    let options = new RequestOptions({headers:this.headers});
    return this._http.put(`${CONFIG.API_URL}/user/update`,{name:name,email:email},options);

  }
  getUserWall(id:number):Observable<any>{
    let options = new RequestOptions({headers:this.headers});
    return this._http.get(`${CONFIG.API_URL}/user/profile/${id}/wall`,options);
    
  }
}
