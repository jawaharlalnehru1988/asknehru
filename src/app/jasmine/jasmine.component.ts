import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Jasmine, TestTopic } from './jasmine';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


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

  selectedSubTopic: string[] = [];
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

  }
}
