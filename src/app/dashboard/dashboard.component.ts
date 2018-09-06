import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 public data;
  constructor(private _jokeService:JokesService) { }

  ngOnInit() {
    this.getJokes()
  }
  getNextJokes(){
    this.getJokes(this.data.next_page_url)
  }
  getPrevJokes(){
    this.getJokes(this.data.prev_page_url)
  }
  getJokes(endPoint=null){
    this._jokeService.getAllJokes(endPoint).subscribe(res =>{
      
      this.data = res.json();
      console.log(this.data);
      
      
    })
  }
  
}
