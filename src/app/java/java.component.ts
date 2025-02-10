import { Component } from '@angular/core';
import { Javacore } from './javacore';
import { JsModel, Topic } from '../javascript/javascript/jstopics';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { JavaContent } from './javaContent';
import Prism from 'prismjs';

@Component({
  selector: 'app-java',
  imports: [MatIconModule, NgFor, NgIf, NgStyle],
  templateUrl: './java.component.html',
  styleUrl: './java.component.scss'
})
export class JavaComponent {
  openTopic: boolean = false;
  javaTopics = new Javacore();
  javaArray: JsModel[] = [];
  subTopicArray: Topic[] = [];
  subTopicTitle: string = "";
  specificTopic!: string;
  sideTopicAppear: boolean =true;

  javaArticleObj = new JavaContent();
  javaArticleArr = this.javaArticleObj.javacontent;
  selectedSubTopic!: number;
  selectedMainTopic!: string;
 
  showMessage: boolean = false;
  messagePosition = {top: '0px', left: '0px'};
event: string|undefined;

  ngOnInit() {
    this.javaArray = this.javaTopics.javaConcept;
  }

  ngAfterViewChecked(): void {
    Prism.highlightAll();
  }

  ngAfterViewInit(): void {
    Prism.highlightAll();
  }
  openMainDetails(){
    this.openTopic = true;
  }
  javaTopicClicked(jTopic: JsModel){
    this.sideTopicAppear = false;
    this.subTopicTitle = jTopic.title;
    this.subTopicArray = jTopic.topics;
    this.selectedMainTopic = jTopic.title;
  }
  javaSubTopicClicked(subTopicTitle: string | undefined, subTopic: number){
    this.specificTopic = subTopicTitle + " " + subTopic;
    this.selectedSubTopic = subTopic;
    
  }
  backToMainTopic(){
    this.sideTopicAppear = true;
  }

  copyCode(event: MouseEvent, content: string | undefined):void{
    const tempElement = document.createElement('div');
    if(content){
      tempElement.innerHTML = content;
    }
    const plainText = tempElement.innerText;
    navigator.clipboard.writeText(plainText).then(() => {
      this.showFloatingMessage(event);
    }).catch((error) => {
      console.error('Error copying content to clipboard:', error);
      alert('Error copying content to clipboard');
    });
  }

  private showFloatingMessage(event: MouseEvent): void {
    this.messagePosition = {
      top: `${event.clientY + 10}px`,
      left: `${event.clientX + (-40)}px`
    }

    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);

  }

}
