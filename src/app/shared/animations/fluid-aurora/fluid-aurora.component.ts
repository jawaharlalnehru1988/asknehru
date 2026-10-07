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

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.initMouseTracking();
  }

  ngOnDestroy(): void {
    this.unlistenMouseMove?.();
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
    }
  }

  private initMouseTracking(): void {
    const el = this.containerRef.nativeElement;

    // Run cursor animation outside Angular's change detection loop
    this.ngZone.runOutsideAngular(() => {
      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        this.targetX = e.clientX - rect.left;
        this.targetY = e.clientY - rect.top;
      };

      window.addEventListener('mousemove', onMove, { passive: true });
      this.unlistenMouseMove = () => window.removeEventListener('mousemove', onMove);

      // Lerp (linear interpolation) loop for smooth cursor trailing fluid orb
      const loop = () => {
        const ease = 0.08;
        this.currentX += (this.targetX - this.currentX) * ease;
        this.currentY += (this.targetY - this.currentY) * ease;

        el.style.setProperty('--cursor-x', `${this.currentX.toFixed(1)}px`);
        el.style.setProperty('--cursor-y', `${this.currentY.toFixed(1)}px`);

        this.rafId = requestAnimationFrame(loop);
      };

      this.rafId = requestAnimationFrame(loop);
    });
  }
}
