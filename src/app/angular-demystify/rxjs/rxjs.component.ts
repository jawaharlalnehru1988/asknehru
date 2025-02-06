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
screenWidth: number = 0;
screenHeight: number = 0;
subTopicArray!: string[];
subToSubTopic!: Subtopic[];
constructor(private screenService: ScreenSizeService){
  super();
  this.checkScreenSize();
}
selectVideo(video:Video) {
  this.selectedVideo = video;
}

  ngAfterViewInit() {
    this.screenService.screenWidth$.pipe(map(num => num * 0.6)).subscribe(width => {
      this.screenWidth = width;
    });
  
    this.screenService.screenHeight$.pipe(map(num => num * 0.7)).subscribe(height => {
      this.screenHeight = height;
    });
  }

  ngOnDestroy() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
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
