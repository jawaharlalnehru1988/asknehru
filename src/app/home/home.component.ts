import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courseDetails: any;
  isContentLoading: boolean = false;
  
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getCourse();
  }
getCourse(){
  this.isContentLoading = true;
  this.api.getCourses().subscribe({
    next: (res)=>{
      this.isContentLoading = false;
      console.log(res);
      this.courseDetails = res;  
    },
    error: (err)=>{
      alert("database source is not found");
    }
  })
}
}
