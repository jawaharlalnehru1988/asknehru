import {
  Component,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  NgZone,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fluid-aurora',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fluid-aurora.component.html',
  styleUrls: ['./fluid-aurora.component.scss']
})
export class FluidAuroraComponent implements OnInit, OnDestroy {
  @Input() showGrid: boolean = true;
  @Input() intensity: 'subtle' | 'vibrant' = 'subtle';

  @ViewChild('container', { static: true })
  containerRef!: ElementRef<HTMLDivElement>;

  private unlistenMouseMove?: () => void;
  private rafId: number | null = null;
  private targetX: number = 0;
  private targetY: number = 0;
  private currentX: number = 0;
  private currentY: number = 0;
  private isVisible: boolean = true;
  private intersectionObserver?: IntersectionObserver;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.initMouseTracking();
  }

  ngOnDestroy(): void {
    this.unlistenMouseMove?.();
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.intersectionObserver?.disconnect();
  }

  private initMouseTracking(): void {
    const el = this.containerRef.nativeElement;

    this.ngZone.runOutsideAngular(() => {
      // Pause animations when hero is scrolled out of viewport
      if ('IntersectionObserver' in window) {
        this.intersectionObserver = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            this.isVisible = entry ? entry.isIntersecting : true;
            if (this.isVisible) {
              el.classList.remove('is-offscreen');
            } else {
              el.classList.add('is-offscreen');
              if (this.rafId !== null) {
                cancelAnimationFrame(this.rafId);
                this.rafId = null;
              }
            }
          },
          { rootMargin: '100px' }
        );
        this.intersectionObserver.observe(el.parentElement || el);
      }

      const scheduleLoop = () => {
        if (!this.isVisible || this.rafId !== null) return;
        this.rafId = requestAnimationFrame(loop);
      };

      const onMove = (e: MouseEvent) => {
        if (!this.isVisible) return;
        const rect = el.getBoundingClientRect();
        this.targetX = e.clientX - rect.left;
        this.targetY = e.clientY - rect.top;
        scheduleLoop();
      };

      window.addEventListener('mousemove', onMove, { passive: true });
      this.unlistenMouseMove = () => window.removeEventListener('mousemove', onMove);

      // Lerp loop runs only while cursor coordinates are transitioning
      const loop = () => {
        if (!this.isVisible) {
          this.rafId = null;
          return;
        }

        const ease = 0.08;
        const dx = this.targetX - this.currentX;
        const dy = this.targetY - this.currentY;

        // Stop RAF when close to target to completely free CPU/GPU cycles
        if (Math.abs(dx) < 0.4 && Math.abs(dy) < 0.4) {
          this.currentX = this.targetX;
          this.currentY = this.targetY;
          el.style.setProperty('--cursor-x', `${this.currentX.toFixed(1)}px`);
          el.style.setProperty('--cursor-y', `${this.currentY.toFixed(1)}px`);
          this.rafId = null;
          return;
        }

        this.currentX += dx * ease;
        this.currentY += dy * ease;

        el.style.setProperty('--cursor-x', `${this.currentX.toFixed(1)}px`);
        el.style.setProperty('--cursor-y', `${this.currentY.toFixed(1)}px`);

        this.rafId = requestAnimationFrame(loop);
      };
    });
  }
}
