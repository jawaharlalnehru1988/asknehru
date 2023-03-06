import { Component, OnInit } from '@angular/core';
import { JscriptService } from '../jscript.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent implements OnInit {
  
  topics: any;

  constructor(private jscript: JscriptService) { }

  ngOnInit(): void {
    this.getCourse();
  }
getCourse(){
  this.jscript.getJscript().subscribe({
    next:(res)=>{
      console.log(res);
      this.topics = res;
      console.log(this.topics);
      
      
    }, error:()=>{
      alert('some issues happening in the backend')
    }
  })
}
}
