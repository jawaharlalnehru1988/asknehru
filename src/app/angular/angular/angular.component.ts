import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularService } from '../angular.service';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import { Router } from '@angular/router';

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

  constructor(private agServie: AngularService, private router: Router) { }

  ngOnInit(): void {
    this.agServie.getAgcourse().subscribe({
      next: (res)=>{
        res.courses.map((item:any)=>{
          if (item.id === 7) {
            this.agIntro = item;
            this.topics = item.topics;
            console.log(this.topics);
            
          }
        });      
      }

    })
    }  
    ngAfterViewInit() {
      const codeBlocks = Array.from(document.querySelectorAll('pre code')) as HTMLElement[];
      codeBlocks.forEach((codeBlock) => {
        hljs.highlightBlock(codeBlock);
      });
    }
  
    
    printTopicId(topicId: number) {
      this.router.navigate(['agdetail']);
    }
}
