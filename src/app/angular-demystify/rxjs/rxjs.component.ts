import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { combineLatest, interval, fromEvent, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { RxjsSupport, Subtopic, Video } from './rxjsSupport';
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

constructor(private screenService: ScreenSizeService, private sanitizer: DomSanitizer) {
  super();
  this.subTopicList = this.topicsClassified[0].subTopics;
  this.projectedContent = this.sanitizer.bypassSecurityTrustHtml(this.topicsClassified[0].subTopics[0].content);
}

selectTopic(title: string){
  this.selectedTopic = title;
    const selectedOBJ = this.topicsClassified.find((obj: any) => obj.title === title);
    console.log('selectedOBJ :', selectedOBJ);
  if (selectedOBJ) {
    this.subTopicList = selectedOBJ.subTopics;
  } else {
    this.subTopicList = this.topicsClassified[0].subTopics;
  }
}

selectSubTopic(topic: string) {
  const selectedOBJ = this.subTopicList.find((obj: any) => obj.topic === topic);
  this.selectedSubTopic = topic;
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
