import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  public jokes;
  id:number;
  constructor(private _userService:UserService,private _router:ActivatedRoute) { }

  ngOnInit() {
    this._router.params.subscribe(res =>{
      this.id = +res['id'];
      this.getUserJokes();
      
      
    })
  }
  getUserJokes(){
     this._userService.getUserWall(this.id).subscribe(res =>{
      this.jokes = res.json().data;
     
      
    })
  }

}
