import { Component } from '@angular/core';
import { Spring, SpringTopic } from './spring';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';

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



  selectSideTopic(title:SpringTopic){
    this.topics = title.topics;
    this.mainTitle = title.title;
  }

  selectTopic(details:string){
      this.subtopics = details;
    }
  }   
