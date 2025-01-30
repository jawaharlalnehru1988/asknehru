import { Component } from '@angular/core';
import { Spring, SpringTopic } from './spring';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SpringContent } from './springContent';
import Prism from 'prismjs';

@Component({
  selector: 'app-springboot',
  imports: [MatIconModule, NgClass],
  templateUrl: './springboot.component.html',
  styleUrl: './springboot.component.scss'
})
export class SpringbootComponent {
  spring = new Spring();

  sideTopics = this.spring.springboot; 
  topics = this.sideTopics[0].topics;
  subtopics: string ="";
  mainTitle: string = "";
  projectedContent: SafeHtml = "";
  springContent = new SpringContent();
  mainContent = this.springContent.mainContent;

constructor(private sanitizer: DomSanitizer){
  this.projectedContent = this.sanitizer.bypassSecurityTrustHtml(this.mainContent[0].content);
}
  selectSideTopic(title:SpringTopic){
    this.topics = title.topics;
    this.mainTitle = title.title;
  }

  selectTopic(details:string){
      this.subtopics = details;
      if(this.subtopics){
       const projected = this.mainContent.find(content => content.title === this.subtopics);
       if(projected){
         this.projectedContent = this.sanitizer.bypassSecurityTrustHtml(projected.content); 
       }
      }
      else{
        this.projectedContent = this.sanitizer.bypassSecurityTrustHtml(this.mainContent[0].content);
    }
  }
    ngAfterViewInit(): void {
          Prism.highlightAll();
      }
  
      ngAfterViewChecked(): void {
          Prism.highlightAll();
      }   
}
