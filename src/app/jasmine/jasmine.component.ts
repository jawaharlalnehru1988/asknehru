import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Jasmine, TestTopic } from './jasmine';


@Component({
  selector: 'app-jasmine',
  imports: [NgFor, NgIf, MatIconModule],
  templateUrl: './jasmine.component.html',
  styleUrl: './jasmine.component.scss'
})
export class JasmineComponent {

  jasmine = new Jasmine();
testing = this.jasmine.testingTopic;

  topics = [
    { title: 'Introduction to Jasmine', content: 'Jasmine is a behavior-driven testing framework for JavaScript.' },
    { title: 'Matchers in Jasmine', content: 'Jasmine provides various matchers like toBe, toEqual, toContain, etc.' },
    { title: 'Spies in Jasmine', content: 'Spies help track function calls and parameters in tests.' }
  ];
  isSidebarOpen = true;
  selectedTopic = this.topics[0];
  selectedSubTopic: TestTopic = this.testing[0];

  selectTopic(topic: any) {
    this.selectedTopic = topic;
  }
  toggleSidebar() {
    this.isSidebarOpen = true;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }
  selectSubTopic(topic: TestTopic) {
    this.selectedSubTopic = topic;  
  }
}
