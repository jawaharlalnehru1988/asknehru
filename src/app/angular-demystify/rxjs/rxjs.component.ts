import { Component } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { RxjsSupport } from './rxjsSupport';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgTopic } from '../angular-blogs/blog';
import Prism from 'prismjs';

@Component({
    selector: 'app-rxjs',
    imports: [YouTubePlayerModule],
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent extends RxjsSupport{
selectedTopic: string = '';
  projectedContent: SafeHtml = '';
  subTopicList: NgTopic[] = [];
  selectedSubTopic: string = ``;

constructor(private sanitizer: DomSanitizer) {
  super();
  this.subTopicList = this.topicsClassified[0].subTopics;
  this.projectedContent = this.sanitizer.bypassSecurityTrustHtml(this.topicsClassified[0].subTopics[0].content);
}

selectTopic(title: string){
  this.selectedTopic = title;
    const selectedOBJ = this.topicsClassified.find((obj: any) => obj.mainTopic === title);
  if (selectedOBJ) {
    this.subTopicList = selectedOBJ.subTopics;
  } else {
    this.subTopicList = this.topicsClassified[0].subTopics;
  }
}

selectSubTopic(topic: string) {
  this.selectedSubTopic = topic;
  const selectedOBJ = this.subTopicList.find((obj: any) => obj.topic === topic);
  if (selectedOBJ) {
    this.projectedContent = this.sanitizer.bypassSecurityTrustHtml(selectedOBJ.content);
  } else{
    this.projectedContent = this.sanitizer.bypassSecurityTrustHtml(this.topicsClassified[0].subTopics[0].content);
  }
}


  ngAfterViewInit(): void {
    Prism.highlightAll();
  }

  ngAfterViewChecked(): void {
    Prism.highlightAll();
  }

}
