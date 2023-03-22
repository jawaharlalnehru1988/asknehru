import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularService } from '../angular.service';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('html', html);

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit, AfterViewInit {
  isLinear = false;
  agIntro: any;
  topics: any;

  constructor(private agServie: AngularService) { }

  ngOnInit(): void {
    this.agServie.getAgcourse().subscribe({
      next: (res)=>{
        console.log(res);
        this.agIntro = res;
        this.topics = res.topics
      }
    })
    }  
    ngAfterViewInit() {
      const codeBlocks = Array.from(document.querySelectorAll('pre code')) as HTMLElement[];
      codeBlocks.forEach((codeBlock) => {
        hljs.highlightBlock(codeBlock);
      });
    }
    
}
