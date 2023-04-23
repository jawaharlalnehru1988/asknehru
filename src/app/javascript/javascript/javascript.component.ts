import { Component, OnInit, ElementRef, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { JscriptService } from '../jscript.service';
// import hljs from 'highlight.js';
import hljs from 'highlight.js/lib/core';

import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import 'prismjs';
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
  dsaData: any;
  challenges:any;
  generalQuestions: any;
  numbersQuestions: any;
  constructor(private jscript: JscriptService) { }

  ngOnInit(): void {
    this.getCourse();
  }
  ngAfterViewInit() {
    // prismjs.highlightAll();
    hljs.highlightAll();

  }
getCourse(){
  this.jscript.getJsCourse().subscribe({
    next:(res)=>{
    console.log('res :', res);
      this.topics = res.topics;
      this.dsaData = res.DSA;
      this.challenges = res.varConstLetChallenges;
      this.generalQuestions = res.generalQuestions;
      this.numbersQuestions = res.numberQuestions
    }, error:()=>{
      alert('some issues happening in the backend')
    }
  })
}
}
