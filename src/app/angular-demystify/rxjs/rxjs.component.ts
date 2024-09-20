import { Component } from '@angular/core';
import { filter, map, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent {
observable$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

ngOnInit() {  
    const modifiedObservable$ = this.observable$.pipe(
      filter(num => num % 2 === 0),
      map(num => num * 10)
    );

    modifiedObservable$.subscribe(x => console.log(x));
}
}
