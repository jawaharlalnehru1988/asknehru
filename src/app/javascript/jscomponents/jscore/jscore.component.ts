import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-jscore',
  templateUrl: './jscore.component.html',
  styleUrls: ['./jscore.component.scss']
})
export class JscoreComponent implements OnInit {
  iframeLoaded = false;

  constructor(private renderer: Renderer2, private el: ElementRef) { }
  
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    const iframe = this.el.nativeElement.querySelector('iframe');
    this.renderer.listen(iframe, 'load', () => {
      this.onIframeLoad();
    });
  }
  onIframeLoad() {
    // This method is called when the iframe has finished loading
    this.iframeLoaded = true;
  }

}
