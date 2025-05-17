import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  private screenWidth = new BehaviorSubject<number>(window.innerWidth);
  private screenHeight = new BehaviorSubject<number>(window.innerHeight);
  screenWidth$ = this.screenWidth.asObservable();
  screenHeight$ = this.screenHeight.asObservable();
  constructor() { 
    window.addEventListener('resize', () => {
      this.screenWidth.next(window.innerWidth);
      this.screenHeight.next(window.innerHeight);
    });
  }
}
