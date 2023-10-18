import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-codedoc',
  templateUrl: './codedoc.component.html',
  styleUrls: ['./codedoc.component.scss']
})
export class CodedocComponent implements OnInit {
  isContentLoading: boolean = false;
  courseDetails: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getCourse();
  }
  getCourse(){
    this.isContentLoading = true;
    this.api.getCourses().subscribe({
      next: (res)=>{
        
        this.isContentLoading = false;
        this.courseDetails = res.courses;  
      },
      error: (err)=>{
        alert("database source is not found");
      }
    })
  }
}
