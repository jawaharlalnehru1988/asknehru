import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  NgZone,
  Renderer2
} from '@angular/core';
import gsap from 'gsap';

@Directive({
  selector: '[appCountUp]',
  standalone: true
})
export class CountUpDirective implements OnInit, OnDestroy {
  @Input() appCountUp: number = 0;
  @Input() suffix: string = '';
  @Input() prefix: string = '';
  @Input() duration: number = 1.8;

  private observer?: IntersectionObserver;
  private hasAnimated: boolean = false;
  private el: HTMLElement;

  constructor(
    elementRef: ElementRef<HTMLElement>,
    private ngZone: NgZone,
    private renderer: Renderer2
  ) {
    this.el = elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.setupObserver();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private setupObserver(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.renderValue(this.appCountUp);
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.hasAnimated) {
              this.hasAnimated = true;
              this.runCountAnimation();
              this.observer?.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );

      this.observer.observe(this.el);
    });
  }

  private runCountAnimation(): void {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: this.appCountUp,
      duration: this.duration,
      ease: 'power2.out',
      onUpdate: () => {
        this.renderValue(Math.floor(obj.val));
      },
      onComplete: () => {
        this.renderValue(this.appCountUp);
      }
    });
  }

  private renderValue(val: number): void {
    this.renderer.setProperty(
      this.el,
      'textContent',
      `${this.prefix}${val}${this.suffix}`
    );
  }
}
