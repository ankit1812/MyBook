import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {Routes} from './routes/routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotifyComponent } from './notify/notify.component';
import { ProfileComponent } from './profile/profile.component';
import { PreetyDatePipe } from './preety-date.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { WallComponent } from './profile/wall/wall.component';
import { FollowComponent } from './profile/follow/follow.component';
// import { HttpClient } from 'selenium-webdriver/http';
import {HttpClientModule} from '@angular/common/http';
import {GravatarModule} from '@infinitycube/gravatar';

import { CreateJokeComponent } from './create-joke/create-joke.component';
import { JokeComponent } from './joke/joke.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    NotifyComponent,
    ProfileComponent,
    PreetyDatePipe,
    EditProfileComponent,
    WallComponent,
    FollowComponent,
   
    CreateJokeComponent,
   
    JokeComponent,
   
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    FormsModule,
    HttpModule,
    NgxSpinnerModule,
    HttpClientModule,
    ReactiveFormsModule,
    GravatarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
