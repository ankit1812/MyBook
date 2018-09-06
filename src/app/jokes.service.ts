import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '../../node_modules/@angular/http';
import {CONFIG} from './config/config'
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private headers:Headers
  constructor(private _authService:AuthService,private _http:Http) {
    this.headers = new Headers({'Authorization': `Bearer ${this._authService.getToken()}`});
  }
  createJoke(joke):Observable<any>{
let url=`${CONFIG.API_URL}/jokes`
let body = {title:joke.title,joke:joke.content}
let options = new RequestOptions({headers:this.headers})
    return this._http.post(url,body,options);
  }
  getAllJokes(endPoint=null){
    let url
if(endPoint){

  url=endPoint
}
else{

     url=`${CONFIG.API_URL}/jokes`
}
let options = new RequestOptions({headers:this.headers})
    return this._http.get(url,options);

  }
  updateJoke(id:number,joke){
let url = `${CONFIG.API_URL}/jokes/${id}`
let body = {title:joke.title,joke:joke.content}
let options = new RequestOptions({headers:this.headers})
    return this._http.put(url,body,options);
  }
  delete(id:number){
    let url = `${CONFIG.API_URL}/jokes/${id}`

    let options = new RequestOptions({headers:this.headers})
        return this._http.delete(url,options);
      }
   }
  

