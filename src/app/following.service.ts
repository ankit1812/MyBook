import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import { NotifyService } from './notify.service';
import { Observable } from 'rxjs';
import {CONFIG} from './config/config'
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class FollowingService {
headers:Headers
  constructor(private _http:Http,private _notify:NotifyService,private _authService:AuthService) { 
    this.headers= new Headers({'Authorization':`Bearer ${this._authService.getToken()}`});
  }
  follow(id:number):Observable<any>{
    let url =`${CONFIG.API_URL}/user/follow`
    let body = {user_to_follow_id:id}
    let options = new RequestOptions({headers:this.headers});
    
return this._http.post(url,body,options);
  }
  unfollow(id:number):Observable<any>{
    let url =`${CONFIG.API_URL}/user/unfollow`
    let body = {user_to_unfollow_id:id}
    let options = new RequestOptions({headers:this.headers});
    
return this._http.post(url,body,options);
  }
  isFollowing(id:number):Observable<any>{
  
    let url =`${CONFIG.API_URL}/user/is/following`
    let body = {user_to_check_if_is_following_id:id}
    let options = new RequestOptions({headers:this.headers});
    
return this._http.post(url,body,options);

  }
}
