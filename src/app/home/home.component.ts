import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courseDetails: any;
  
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getCourse();
  }
getCourse(){
  this.api.gitCourses().subscribe({
    next: (res)=>{
      console.log(res);
      this.courseDetails = res;  
    },
    error: (err)=>{
      alert("database source is not found");
    }
  })
}
}
