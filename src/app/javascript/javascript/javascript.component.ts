import { Component } from '@angular/core';
import { JssidebarComponent } from "../../jssidebar/jssidebar.component";
import { NgClass, NgFor } from '@angular/common';
import { JsModel, Jstopics, Topic } from './jstopics';
import { MatIconModule } from '@angular/material/icon';
import * as Prism from 'prismjs';
import { PrismHighlightDirective } from 'src/core/directives/highlight.directive';
import { JsContents } from './jscontents';


@Component({
    selector: 'app-javascript',
    standalone: true,
    imports: [JssidebarComponent, NgFor, MatIconModule, PrismHighlightDirective],
    templateUrl: './javascript.component.html',
    styleUrl: './javascript.component.scss'
})
export class JavascriptComponent {
    isArrowActive = false;
    jstopic: string = "";
    mainTopicAppear: boolean = false;
    jstopics = new Jstopics();
    topics = this.jstopics.categorisedTopics;
    subTopicTitle: string = "";
    subTopicArray: Topic[] = [];

    jsContents:any = new JsContents();
    jsContent: any;
    matchingTopicId: string = "";

    ngOnInit():void{
        this.jsContent = this.jsContents.topicContents;
    }

    receiveTopic(topic: string){
    this.jstopic = topic;
    }

    clickTopic(topic: JsModel){
        this.subTopicTitle = topic.title;
        this.subTopicArray = topic.topics;     
        this.mainTopicAppear = true;                                                                                                                                             
    }

    subTopicClicked(subTopicTitle: string, subTopic: Topic) {
    console.log('subTopicTitle :', subTopicTitle + " " + subTopic.id);
    this.matchingTopicId = subTopicTitle + " " + subTopic.id;
    }

    backToMainTopic() {
        this.mainTopicAppear = false;
    }

    ngAfterViewInit(): void {
        Prism.highlightAll();
    }

    ngAfterViewChecked(): void {
        Prism.highlightAll();
    }
}
