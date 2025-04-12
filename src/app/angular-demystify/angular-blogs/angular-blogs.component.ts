import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Prism from 'prismjs';
import { Blog, NgTopic } from './blog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-blogs',
    imports: [],
    templateUrl: './angular-blogs.component.html',
    styleUrl: './angular-blogs.component.scss'
})
export class AngularBlogsComponent extends Blog{
  selectedTopic: string = '';
  projectedContent: SafeHtml = '';
  subTopicList: NgTopic[] = [];
  selectedSubTopic: string = ``;

  constructor(private sanitizer: DomSanitizer) {
    super();
    this.subTopicList = this.angularConcepts[0].subTopics;
    this.projectedContent = this.sanitizer.bypassSecurityTrustHtml(this.angularConcepts[0].subTopics[0].content);
   }

   selectTopic(topic: string) {
    this.selectedTopic = topic;
    const selectedOBJ = this.angularConcepts.find((obj: any) => obj.mainTopic === topic);
    if (selectedOBJ) {
      this.subTopicList = selectedOBJ.subTopics;
    } else{
      this.subTopicList = this.angularConcepts[0].subTopics;
    }
    
  }

  selectSubTopic(topic: string) {
    const selectedOBJ = this.subTopicList.find((obj: any) => obj.topic === topic);
    this.selectedSubTopic = topic;
    if (selectedOBJ) {
      this.projectedContent = this.sanitizer.bypassSecurityTrustHtml(selectedOBJ.content);
    } else{
      this.projectedContent = this.sanitizer.bypassSecurityTrustHtml(this.angularConcepts[0].subTopics[0].content);
    }
  }

  ngAfterViewInit(): void {
    Prism.highlightAll();
  }

  ngAfterViewChecked(): void {
    Prism.highlightAll();
  }

}
