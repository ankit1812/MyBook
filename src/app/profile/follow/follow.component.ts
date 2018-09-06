import { Component, OnInit, Input } from '@angular/core';
import { FollowingService } from '../../following.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {
@Input() currentProfileId;
isFollowing:boolean=false
isLoading:boolean=true
  constructor(private _followService:FollowingService) { }

  ngOnInit() {
    this._followService.isFollowing(this.currentProfileId).subscribe(res => {
    this.isFollowing = res.json().following;
    this.isLoading=false;
    console.log(res);
    
      
    })
  }
  follow(){
    this.isLoading=true
    this._followService.follow(this.currentProfileId).subscribe(res => {
      console.log(res);
      this.isFollowing = true
      this.isLoading=false      
    })
  }
  unfollow(){
    this.isLoading=true
    this._followService.unfollow(this.currentProfileId).subscribe(res => {
      console.log(res);
      this.isFollowing = false
      this.isLoading=false
    })
  }
  

}
