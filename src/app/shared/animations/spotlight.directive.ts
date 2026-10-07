import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  NgZone,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appSpotlight]',
  standalone: true
})
export class SpotlightDirective implements OnInit, OnDestroy {
  @Input() spotlightColor: string = 'rgba(59, 130, 246, 0.16)';
  @Input() spotlightRadius: number = 280;

  private el: HTMLElement;
  private spotlightOverlay: HTMLElement | null = null;
  private unlistenEnter?: () => void;
  private unlistenMove?: () => void;
  private unlistenLeave?: () => void;
  private rafId: number | null = null;

  constructor(
    elementRef: ElementRef<HTMLElement>,
    private ngZone: NgZone,
    private renderer: Renderer2
  ) {
    this.el = elementRef.nativeElement;
  }

  ngOnInit(): void {
    const computedPosition = window.getComputedStyle(this.el).position;
    if (computedPosition === 'static') {
      this.renderer.setStyle(this.el, 'position', 'relative');
    }
    this.renderer.setStyle(this.el, 'overflow', 'hidden');

    this.createSpotlightOverlay();
    this.bindEvents();
  }

  ngOnDestroy(): void {
    this.unlistenEnter?.();
    this.unlistenMove?.();
    this.unlistenLeave?.();
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
    }
  }

  private createSpotlightOverlay(): void {
    this.spotlightOverlay = this.renderer.createElement('div');
    this.renderer.setStyle(this.spotlightOverlay, 'position', 'absolute');
    this.renderer.setStyle(this.spotlightOverlay, 'inset', '0');
    this.renderer.setStyle(this.spotlightOverlay, 'pointer-events', 'none');
    this.renderer.setStyle(this.spotlightOverlay, 'border-radius', 'inherit');
    this.renderer.setStyle(this.spotlightOverlay, 'z-index', '1');
    this.renderer.setStyle(this.spotlightOverlay, 'opacity', '0');
    this.renderer.setStyle(
      this.spotlightOverlay,
      'transition',
      'opacity 400ms ease'
    );

    this.renderer.appendChild(this.el, this.spotlightOverlay);
  }

  private bindEvents(): void {
    this.ngZone.runOutsideAngular(() => {
      this.unlistenEnter = this.renderer.listen(this.el, 'pointerenter', () => {
        if (this.spotlightOverlay) {
          this.renderer.setStyle(this.spotlightOverlay, 'opacity', '1');
        }
      });

      this.unlistenMove = this.renderer.listen(
        this.el,
        'pointermove',
        (event: PointerEvent) => {
          if (this.rafId !== null) {
            cancelAnimationFrame(this.rafId);
          }
          this.rafId = requestAnimationFrame(() => {
            const rect = this.el.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            if (this.spotlightOverlay) {
              this.renderer.setStyle(
                this.spotlightOverlay,
                'background',
                `radial-gradient(${this.spotlightRadius}px circle at ${x}px ${y}px, ${this.spotlightColor}, transparent 80%)`
              );
            }
          });
        }
      );

      this.unlistenLeave = this.renderer.listen(this.el, 'pointerleave', () => {
        if (this.rafId !== null) {
          cancelAnimationFrame(this.rafId);
          this.rafId = null;
        }
        if (this.spotlightOverlay) {
          this.renderer.setStyle(this.spotlightOverlay, 'opacity', '0');
        }
      });
    });
  }
}
