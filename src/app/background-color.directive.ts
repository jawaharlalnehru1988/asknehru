import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective implements OnInit {
  @Input() appBackgroundColor: string = ''; // Input property for the background color

  constructor(private el: ElementRef) {}

  ngOnInit() {
    console.log('this.appBackgroundColor :', this.appBackgroundColor);
    this.el.nativeElement.style.color = `${this.appBackgroundColor} !important`;
  }

  ngAfterViewInit(){
    console.log(' this.appBackgroundColor :',  this.appBackgroundColor);
    this.el.nativeElement.style.color = `${this.appBackgroundColor} !important`;

  }
}