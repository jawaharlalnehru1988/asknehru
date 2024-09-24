import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, interval, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']  // Corrected property name
})
export class RxjsComponent  {

  @ViewChild('filterInput') filterInput!: ElementRef;



  ngAfterViewInit() {

    const keyUp$ = fromEvent<KeyboardEvent>(this.filterInput.nativeElement, 'keyup');

    const filter$ = keyUp$.pipe(
      map((event: KeyboardEvent)=> (event.target as HTMLInputElement).value)
    )


    filter$.subscribe(value => console.log(value));

  }


}
