import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Jasmine, TestTopic, TopicsExplained } from './jasmine';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import Prism from 'prismjs';


@Component({
  selector: 'app-jasmine',
  imports: [ MatIconModule],
  templateUrl: './jasmine.component.html',
  styleUrl: './jasmine.component.scss'
})
export class JasmineComponent {




jasmine = new Jasmine();
testing = this.jasmine.testingTopic;



  isSidebarOpen = true;

  selectedSubTopic: string[] = this.jasmine.testingTopic[0].subTopic;
  selectedTopic: any;
  projectedContent: SafeHtml = ``;

  constructor(private sanitizer: DomSanitizer) {
    this.projectedContent = this.sanitizer.bypassSecurityTrustHtml(this.jasmine.topicsExplained[0].content);
  }

  selectTopic(topic: any) {
    this.selectedTopic = topic;
    const selectedTopic = this.jasmine.testingTopic.find((t: TestTopic) => t.title === topic);
    if (selectedTopic) {
      this.selectedSubTopic = selectedTopic.subTopic;
      
    }
  }
  toggleSidebar() {
    this.isSidebarOpen = true;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }
  selectSubTopic(subTopic: string) {
  console.log('subTopic :', subTopic);
    const selectedExplainedObj = this.jasmine.topicsExplained.find((obj:TopicsExplained)=> obj.topic === subTopic);
      if (selectedExplainedObj) {
      this.projectedContent = this.sanitizer.bypassSecurityTrustHtml(selectedExplainedObj.content);
    }
  }

  ngAfterViewInit(): void {
          Prism.highlightAll();
   }
  
  ngAfterViewChecked(): void {
          Prism.highlightAll();
  }
}
