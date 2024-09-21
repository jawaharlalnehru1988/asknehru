import { Component } from '@angular/core';
import { resolve } from 'core-js/fn/promise';
import { from, interval, of, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent {
map = new Map();
  // ofObservable$ = of(1, 2, 3);
  sampleObject = {
    name: "Nehru",
    age: 23,
    address: {
      city: "Chennai",
      state: "Tamilnadu"
    }
  }
  
  ngOnInit(): void {
    this.map.set(1, "hi");
    this.map.set(2, "bye");
    this.map.set(3, "hello");
    
    const entries = Object.entries(this.sampleObject);
    console.log('entries :', entries);
    const observable = from(entries);
    observable.subscribe(([key, value]) => console.log(`${key}: ${ JSON.stringify(value)}`));
    // const arraySource$ = from(this.sampleObject);
    // this.ofObservable$.subscribe(value => console.log(value));

    // arraySource$.subscribe(value => console.log(value));
  }
}
