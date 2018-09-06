import { Injectable,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class ProfileUpdatedService {
profileUpdated:EventEmitter<any>;
  constructor() {
    this.profileUpdated = new EventEmitter
   }
   profileUpdate(user:any){
    this.profileUpdated.emit(user);
   }
}
