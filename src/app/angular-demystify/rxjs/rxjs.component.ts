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
  @ViewChild('clickButton',) button!: ElementRef;
  @ViewChild('inputText') inputText!: ElementRef;


  ngAfterViewInit() {

   const inputText$ = fromEvent<KeyboardEvent>
   (this.inputText.nativeElement, 'input');

   inputText$.pipe(
    map((event: KeyboardEvent) => 
      (event.target as HTMLInputElement)?.value)
   ).subscribe((value:string) => console.log( value))
  }

  ngOnDestroy() {}
}
