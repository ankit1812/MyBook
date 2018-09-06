import { Component, OnInit, } from '@angular/core';
// Import the Router and navigation events
import {
  Router, NavigationStart, NavigationEnd,
  NavigationCancel, NavigationError, Event
} from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user:any;
  private token: boolean = false;
  constructor(
    private _router: Router,
    private authService: AuthService
    ) {
  
  this.user=this.authService.getAuthUser();
  
    }

  ngOnInit(){    
    
  }
 isLoggedin():boolean{
   return this.authService.isLoggedIn();
 }
 logOut(){
   this.authService.logout();
 }
 
}