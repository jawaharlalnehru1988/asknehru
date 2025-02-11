import { Component } from '@angular/core';
import { JsModel, Jstopics, Topic } from './jstopics';
import { MatIconModule } from '@angular/material/icon';
import * as Prism from 'prismjs';
import { JsContent, JsContents } from './jscontents';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { JsDsaContent } from 'src/app/javascript/javascript/jsdsaContent';
import { MatButtonModule } from '@angular/material/button';


@Component({
    selector: 'app-javascript',
    standalone: true,
    imports: [ MatIconModule, MatButtonModule],
    templateUrl: './javascript.component.html',
    styleUrl: './javascript.component.scss'
})
export class JavascriptComponent extends JsDsaContent {
    isArrowActive = false;
    jstopic: string = "";
    mainTopicAppear: boolean = false;
    jstopics = new Jstopics();
 
    topics = this.jstopics.categorisedTopics;
    dsaTopics = this.jstopics.dsaTopics;
    subTopicTitle: string = "";
    subTopicArray: Topic[] = [];
    jsContents:any = new JsContents();
    jsContent: any;
    headers: string[] = ['JS Core', 'JS DSA', "JS MCQ"];
    matchingTopicId: string = "";
    projectedContent: SafeHtml = this.jsContents.topicContents[0].content;
    projectedDSAContent: SafeHtml = '';
    
    ngOnInit():void{
        this.jsContent = this.jsContents.topicContents;
       
        this.projectedDSAContent = this.dsaContents[0].content;
    }
    
    constructor(private sanitizer: DomSanitizer) { 
        super()
    }
    selectHeader(topic: string){
    
    this.jstopic = topic;
    const selectedTopic = topic === 'JS DSA' ? this.dsaTopics[0] : this.topics[0];
    this.clickTopic(selectedTopic);
    }
    clickTopic(topic: JsModel){
        this.subTopicTitle = topic.title;
        this.subTopicArray = topic.topics;     
        this.mainTopicAppear = true;                                                                                                                                             
    }
    subDSATopicClicked(subTopic:string){
    console.log('subTopic :', subTopic.length);
        const dsaContentObj = this.dsaContents.find((topic: JsContent)=> topic.articleTitle === subTopic);
        console.log('dsaContentObj :', dsaContentObj);
        if(dsaContentObj){
            this.projectedDSAContent = this.sanitizer.bypassSecurityTrustHtml(dsaContentObj.content);
        } else{
            this.projectedDSAContent = this.sanitizer.bypassSecurityTrustHtml("<p>No content found</p>")
        }
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
