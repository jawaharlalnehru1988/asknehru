import { Component } from '@angular/core';
import { Javacore } from './javacore';
import { JsModel, Topic } from '../javascript/javascript/jstopics';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-java',
  imports: [MatIconModule],
  templateUrl: './java.component.html',
  styleUrl: './java.component.scss'
})
export class JavaComponent {
  openTopic: boolean = false;
  javaTopics = new Javacore();
  javaArray: JsModel[] = [];
  subTopicArray: Topic[] | undefined;
  subTopicTitle: string | undefined;
  specificTopic: string = "";
  sideTopicAppear: boolean =true;

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
    
  }
  backToMainTopic(){
    this.sideTopicAppear = true;
  }
}
