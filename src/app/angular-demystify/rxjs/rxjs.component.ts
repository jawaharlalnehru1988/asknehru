import { Component, ElementRef, ViewChild } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { combineLatest, interval, fromEvent, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [YouTubePlayerModule],
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'], // Corrected property name
})
export class RxjsComponent {
 


  ngAfterViewInit() {

  }

  ngOnDestroy() {}
}
