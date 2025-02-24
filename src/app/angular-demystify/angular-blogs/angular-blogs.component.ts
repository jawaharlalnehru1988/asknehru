import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Prism from 'prismjs';
import { Blog } from './blog';
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

  constructor(private sanitizer: DomSanitizer) {
    super();
    this.projectedContent = this.sanitizer.bypassSecurityTrustHtml(this.angularConcepts[0].content);
   }

   selectTopic(topic: string) {
    this.selectedTopic = topic;
    const selectedTopic = this.angularConcepts.find((obj: any) => obj.topic === topic);
    if (selectedTopic) {
      this.projectedContent = this.sanitizer.bypassSecurityTrustHtml(selectedTopic.content);
    } else{
      this.projectedContent = this.sanitizer.bypassSecurityTrustHtml(this.angularConcepts[0].content);
    }
  }

  ngAfterViewInit(): void {
    Prism.highlightAll();
  }

  ngAfterViewChecked(): void {
    Prism.highlightAll();
  }

}
