import { Component } from '@angular/core';
import { JssidebarComponent } from "../../jssidebar/jssidebar.component";
import { JsModel, Jstopics, Topic } from './jstopics';
import { MatIconModule } from '@angular/material/icon';
import * as Prism from 'prismjs';
import { JsContent, JsContents } from './jscontents';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


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
    subTopicTitle: string = "";
    subTopicArray: Topic[] = [];

    jsContents:any = new JsContents();
    jsContent: any;
    matchingTopicId: string = "";
    projectedContent: SafeHtml = this.jsContents.topicContents[0].content;

    ngOnInit():void{
        this.jsContent = this.jsContents.topicContents;
    }

    constructor(private sanitizer: DomSanitizer) { 

    }
    receiveTopic(topic: string){
    this.jstopic = topic;
    }

    clickTopic(topic: JsModel){
        this.subTopicTitle = topic.title;
        this.subTopicArray = topic.topics;     
        this.mainTopicAppear = true;                                                                                                                                             
    }

    subTopicClicked(subTopic: string) {
    this.matchingTopicId = subTopic;
    const contentObj = this.jsContents.topicContents.find((topic: JsContent) => topic.articleTitle === subTopic);
        if (contentObj) {
            this.projectedContent = this.sanitizer.bypassSecurityTrustHtml(contentObj.content);
        }
        else{
            this.projectedContent = this.sanitizer.bypassSecurityTrustHtml("<p>No content found</p>");
        }
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
