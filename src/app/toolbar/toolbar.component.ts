import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  showFiller = false;
  courseName: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
this.api.getCourses().subscribe({
  next:(res)=>{
    this.courseName = res;
    
  }
})
  }

}
