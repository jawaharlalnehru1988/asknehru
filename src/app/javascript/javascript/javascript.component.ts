import { Component, OnInit, ElementRef, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { JscriptService } from '../jscript.service';
import hljs from 'highlight.js';
@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent implements OnInit, AfterViewInit {
  topics: any;
  title: boolean = true;
  stringTopics: any;
  charAt: any;

  constructor(private jscript: JscriptService) { }

  ngOnInit(): void {
    this.getCourse();
  }
  ngAfterViewInit() {
    hljs.highlightAll();
  }
getCourse(){
  this.jscript.getCourse().subscribe({
    next:(res)=>{
      this.topics = res[3].topics;
    }, error:()=>{
      alert('some issues happening in the backend')
    }
  })
}
}
