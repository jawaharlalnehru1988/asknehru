import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { combineLatest, interval, fromEvent, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { RxjsSupport, Subtopic, Video } from './rxjsSupport';

@Component({
    selector: 'app-rxjs',
    imports: [YouTubePlayerModule],
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent extends RxjsSupport{


selectedVideo:Video = this.videoObject[0];
isMobile = false;
screenWidth: number = window.innerWidth;
screenHeight: number = window.innerHeight;
subTopicArray!: string[];
subToSubTopic!: Subtopic[];
constructor(private screenService: ScreenSizeService){
  super();
}
selectVideo(video:Video) {
  this.selectedVideo = video;
}

ngOnInit(){
  this.updateScreenSize();
}

@HostListener('window:resize', [`$event`])
onResize(event: Event){
  this.updateScreenSize();
}

private updateScreenSize(){
  if (window.innerWidth < 700) {
    this.screenWidth = 300;
    this.screenHeight = 250;
  } else {
    this.screenWidth = 800;
    this.screenHeight = 550;
  }
  console.log('this.screenWidth :', this.screenWidth);
  console.log('this.screenHeight :', this.screenHeight);
}

  selectTopic(subTopicList: string[] | Subtopic[]){
    if (this.isStringArray(subTopicList)) {
      this.subTopicArray = subTopicList;
    } else{
      this.subToSubTopic = subTopicList;
    }

  }
  private isStringArray(value: any): value is string[]{
    return Array.isArray(value) && value.every(item => typeof item === 'string');
  }
}
