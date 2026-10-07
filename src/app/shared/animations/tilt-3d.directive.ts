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
  selector: '[appTilt3d]',
  standalone: true
})
export class Tilt3dDirective implements OnInit, OnDestroy {
  @Input() maxTilt: number = 10; // degrees
  @Input() perspective: number = 1000; // px
  @Input() scale: number = 1.02;
  @Input() glare: boolean = true;
  @Input() maxGlare: number = 0.25;

  private el: HTMLElement;
  private glareEl: HTMLElement | null = null;
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
    this.setupElement();
    if (this.glare) {
      this.createGlareElement();
    }
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

  private setupElement(): void {
    this.renderer.setStyle(this.el, 'transform-style', 'preserve-3d');
    this.renderer.setStyle(this.el, 'will-change', 'transform');
    this.renderer.setStyle(
      this.el,
      'transition',
      'transform 350ms cubic-bezier(0.03, 0.98, 0.52, 0.99), box-shadow 350ms ease'
    );
  }

  private createGlareElement(): void {
    const parent = this.el;
    const computedPosition = window.getComputedStyle(parent).position;
    if (computedPosition === 'static') {
      this.renderer.setStyle(parent, 'position', 'relative');
    }

    this.glareEl = this.renderer.createElement('div');
    this.renderer.setStyle(this.glareEl, 'position', 'absolute');
    this.renderer.setStyle(this.glareEl, 'inset', '0');
    this.renderer.setStyle(this.glareEl, 'pointer-events', 'none');
    this.renderer.setStyle(this.glareEl, 'border-radius', 'inherit');
    this.renderer.setStyle(this.glareEl, 'z-index', '30');
    this.renderer.setStyle(this.glareEl, 'opacity', '0');
    this.renderer.setStyle(
      this.glareEl,
      'transition',
      'opacity 300ms ease, background 100ms ease'
    );

    this.renderer.appendChild(parent, this.glareEl);
  }

  private bindEvents(): void {
    // Run outside Angular zone so high-frequency pointer moves don't trigger change detection cycles
    this.ngZone.runOutsideAngular(() => {
      this.unlistenEnter = this.renderer.listen(this.el, 'pointerenter', () => {
        this.renderer.setStyle(
          this.el,
          'transition',
          'transform 100ms ease-out, box-shadow 300ms ease'
        );
        if (this.glareEl) {
          this.renderer.setStyle(this.glareEl, 'opacity', `${this.maxGlare}`);
        }
      });

      this.unlistenMove = this.renderer.listen(
        this.el,
        'pointermove',
        (event: PointerEvent) => {
          if (this.rafId !== null) {
            cancelAnimationFrame(this.rafId);
          }
          this.rafId = requestAnimationFrame(() => this.handlePointerMove(event));
        }
      );

      this.unlistenLeave = this.renderer.listen(this.el, 'pointerleave', () => {
        if (this.rafId !== null) {
          cancelAnimationFrame(this.rafId);
          this.rafId = null;
        }
        this.renderer.setStyle(
          this.el,
          'transition',
          'transform 500ms cubic-bezier(0.03, 0.98, 0.52, 0.99), box-shadow 500ms ease'
        );
        this.renderer.setStyle(
          this.el,
          'transform',
          `perspective(${this.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
        );
        if (this.glareEl) {
          this.renderer.setStyle(this.glareEl, 'opacity', '0');
        }
      });
    });
  }

  private handlePointerMove(event: PointerEvent): void {
    const rect = this.el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const percentX = mouseX / width;
    const percentY = mouseY / height;

    const tiltX = (percentY - 0.5) * -2 * this.maxTilt;
    const tiltY = (percentX - 0.5) * 2 * this.maxTilt;

    this.renderer.setStyle(
      this.el,
      'transform',
      `perspective(${this.perspective}px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(${this.scale}, ${this.scale}, ${this.scale})`
    );

    if (this.glareEl) {
      const glareX = (percentX * 100).toFixed(1);
      const glareY = (percentY * 100).toFixed(1);
      this.renderer.setStyle(
        this.glareEl,
        'background',
        `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 65%)`
      );
    }
  }
}
