import { Component } from '@angular/core';
import { Javacore } from './javacore';
import { JsModel, Topic } from '../javascript/javascript/jstopics';
import { MatIconModule } from '@angular/material/icon';
import { JsContents } from '../javascript/javascript/jscontents';
import { NgFor } from '@angular/common';
import { JavaContent } from './javaContent';

@Component({
  selector: 'app-java',
  imports: [MatIconModule, NgFor],
  templateUrl: './java.component.html',
  styleUrl: './java.component.scss'
})
export class JavaComponent {
  openTopic: boolean = false;
  javaTopics = new Javacore();
  javaArray: JsModel[] = [];
  subTopicArray: Topic[] | undefined;
  subTopicTitle: string | undefined;
  specificTopic!: string;
  sideTopicAppear: boolean =true;

  javaArticleObj = new JavaContent();
  javaArticleArr = this.javaArticleObj.javacontent;
 

  ngOnInit() {
    this.javaArray = this.javaTopics.javaConcept;
  }


  openMainDetails(){
    this.openTopic = true;
  }
  javaTopicClicked(jTopic: JsModel){
    this.sideTopicAppear = false;
    this.subTopicTitle = jTopic.title;
    this.subTopicArray = jTopic.topics;
  }
  javaSubTopicClicked(subTopicTitle: string | undefined, subTopic: number){
    this.specificTopic = subTopicTitle + " " + subTopic;
    console.log('this.specificTopic :', this.specificTopic);
    
  }
  backToMainTopic(){
    this.sideTopicAppear = true;
  }
}
