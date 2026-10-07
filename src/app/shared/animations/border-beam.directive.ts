import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBorderBeam]',
  standalone: true
})
export class BorderBeamDirective implements OnInit {
  @Input() beamSize: number = 200;
  @Input() duration: number = 8; // seconds
  @Input() beamColor: string = 'linear-gradient(to right, transparent, #f59e0b, #10b981, #3b82f6, transparent)';
  @Input() borderWidth: number = 1.5;

  private el: HTMLElement;

  constructor(
    elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    this.el = elementRef.nativeElement;
  }

  ngOnInit(): void {
    const parent = this.el;
    const computedPosition = window.getComputedStyle(parent).position;
    if (computedPosition === 'static') {
      this.renderer.setStyle(parent, 'position', 'relative');
    }
    this.renderer.setStyle(parent, 'overflow', 'hidden');

    const beam = this.renderer.createElement('div');
    this.renderer.addClass(beam, 'border-beam-line');
    this.renderer.setStyle(beam, 'position', 'absolute');
    this.renderer.setStyle(beam, 'inset', '0');
    this.renderer.setStyle(beam, 'border-radius', 'inherit');
    this.renderer.setStyle(beam, 'pointer-events', 'none');
    this.renderer.setStyle(beam, 'padding', `${this.borderWidth}px`);
    this.renderer.setStyle(
      beam,
      'mask',
      'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)'
    );
    this.renderer.setStyle(beam, 'mask-composite', 'exclude');
    this.renderer.setStyle(
      beam,
      '-webkit-mask',
      'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)'
    );
    this.renderer.setStyle(beam, '-webkit-mask-composite', 'xor');

    const innerGlow = this.renderer.createElement('div');
    this.renderer.setStyle(innerGlow, 'position', 'absolute');
    this.renderer.setStyle(innerGlow, 'width', `${this.beamSize}px`);
    this.renderer.setStyle(innerGlow, 'height', '100%');
    this.renderer.setStyle(innerGlow, 'background', this.beamColor);
    this.renderer.setStyle(
      innerGlow,
      'animation',
      `borderBeamTravel ${this.duration}s linear infinite`
    );

    this.renderer.appendChild(beam, innerGlow);
    this.renderer.appendChild(parent, beam);
  }
}
