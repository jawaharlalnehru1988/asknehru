import { Component } from '@angular/core';
import { JssidebarComponent } from "../../jssidebar/jssidebar.component";
import { NgClass } from '@angular/common';
import { JsModel, Jstopics } from './jstopics';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-javascript',
    standalone: true,
    imports: [JssidebarComponent, MatIconModule],
    templateUrl: './javascript.component.html',
    styleUrl: './javascript.component.scss'
})
export class JavascriptComponent {
    isArrowActive = false;
    jstopic: string = "";
    mainTopicAppear: boolean = false;

   jstopics = new Jstopics();
   topics = this.jstopics.categorisedTopics;
    subTopicTitle: any;
    subTopicArray: any;

    toggleArrow(): void {
      this.isArrowActive = !this.isArrowActive;
    }

    receiveTopic(topic: string){
    this.jstopic = topic;

    }

    clickTopic(topic: any){
        this.subTopicTitle = topic.title;
        this.subTopicArray = topic.topics;     
        this.mainTopicAppear = true;                                                                                                                                             
    }

    subTopicClicked(subTopic:any){
        console.log('subTopic :', subTopic);
    }
    backToMainTopic(){
        this.mainTopicAppear = false;
    }
}
