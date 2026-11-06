import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  NgZone,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

@Component({
  selector: 'app-particle-network',
  standalone: true,
  imports: [CommonModule],
  template: `<canvas #canvas class="particle-canvas"></canvas>`,
  styles: [`
    :host {
      display: block;
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 1;
      overflow: hidden;
    }
    .particle-canvas {
      width: 100%;
      height: 100%;
      display: block;
    }
  `]
})
export class ParticleNetworkComponent implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D | null = null;
  private particles: Particle[] = [];
  private rafId: number | null = null;
  private isVisible = true;
  private isRunning = false;
  private mouse = { x: -1000, y: -1000, active: false };
  private unlistenMouseMove?: () => void;
  private unlistenMouseLeave?: () => void;
  private resizeObserver?: ResizeObserver;
  private intersectionObserver?: IntersectionObserver;

  private colors = [
    'rgba(245, 158, 11, ', // Amber
    'rgba(16, 185, 129, ', // Emerald
    'rgba(59, 130, 246, ', // Blue
    'rgba(168, 85, 247, ', // Purple
    'rgba(6, 182, 212, '   // Cyan
  ];

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.initCanvas();
  }

  ngOnDestroy(): void {
    this.stopAnimation();
    this.unlistenMouseMove?.();
    this.unlistenMouseLeave?.();
    this.resizeObserver?.disconnect();
    this.intersectionObserver?.disconnect();
  }

  private initCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    if (!this.ctx) return;

    this.resizeCanvas();

    this.ngZone.runOutsideAngular(() => {
      // Resize handling
      this.resizeObserver = new ResizeObserver(() => {
        this.resizeCanvas();
        this.createParticles();
      });
      this.resizeObserver.observe(canvas.parentElement || canvas);

      // Intersection Observer to stop RAF loop when scrolled out of view
      if ('IntersectionObserver' in window) {
        this.intersectionObserver = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            this.isVisible = entry ? entry.isIntersecting : true;
            if (this.isVisible) {
              this.startAnimation();
            } else {
              this.stopAnimation();
            }
          },
          { rootMargin: '100px' }
        );
        this.intersectionObserver.observe(canvas.parentElement || canvas);
      }

      // Mouse tracking
      const onMouseMove = (e: MouseEvent) => {
        if (!this.isVisible) return;
        const rect = canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
        this.mouse.active = true;
      };

      const onMouseLeave = () => {
        this.mouse.active = false;
        this.mouse.x = -1000;
        this.mouse.y = -1000;
      };

      window.addEventListener('mousemove', onMouseMove, { passive: true });
      window.addEventListener('mouseleave', onMouseLeave, { passive: true });
      this.unlistenMouseMove = () => window.removeEventListener('mousemove', onMouseMove);
      this.unlistenMouseLeave = () => window.removeEventListener('mouseleave', onMouseLeave);

      this.createParticles();
      this.startAnimation();
    });
  }

  private startAnimation(): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.rafId = requestAnimationFrame(this.animate);
  }

  private stopAnimation(): void {
    this.isRunning = false;
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const parent = canvas.parentElement;
    const width = parent ? parent.clientWidth : window.innerWidth;
    const height = parent ? parent.clientHeight : 600;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    if (this.ctx) {
      this.ctx.scale(dpr, dpr);
    }
  }

  private createParticles(): void {
    const canvas = this.canvasRef.nativeElement;
    const width = parseFloat(canvas.style.width) || canvas.width;
    const height = parseFloat(canvas.style.height) || canvas.height;

    // Optimized particle count: 42 particles max (down from 75) provides excellent visuals while slashing pair checks by 70%
    const count = Math.min(Math.floor((width * height) / 16000), 42);
    this.particles = [];

    for (let i = 0; i < count; i++) {
      const colorPrefix = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 1.8 + 1.2,
        color: colorPrefix,
        alpha: Math.random() * 0.5 + 0.3
      });
    }
  }

  private animate = (): void => {
    if (!this.isRunning || !this.ctx) return;
    const canvas = this.canvasRef.nativeElement;
    const width = parseFloat(canvas.style.width) || canvas.width;
    const height = parseFloat(canvas.style.height) || canvas.height;

    this.ctx.clearRect(0, 0, width, height);

    // Update and draw particles
    const pLen = this.particles.length;
    for (let i = 0; i < pLen; i++) {
      const p = this.particles[i];

      p.x += p.vx;
      p.y += p.vy;

      // Bounce off walls
      if (p.x < 0) { p.x = 0; p.vx *= -1; }
      else if (p.x > width) { p.x = width; p.vx *= -1; }
      if (p.y < 0) { p.y = 0; p.vy *= -1; }
      else if (p.y > height) { p.y = height; p.vy *= -1; }

      // Draw particle dot (soft outer glow + core dot without expensive shadowBlur state switches)
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
      this.ctx.fillStyle = `${p.color}${(p.alpha * 0.25).toFixed(2)})`;
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `${p.color}${p.alpha.toFixed(2)})`;
      this.ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < pLen; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distSq = dx * dx + dy * dy;

        // Use distance squared (110*110 = 12100) to avoid Math.sqrt on every pair
        if (distSq < 12100) {
          const dist = Math.sqrt(distSq);
          const lineAlpha = (1 - dist / 110) * 0.22;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(148, 163, 184, ${lineAlpha.toFixed(3)})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }

      // Connect to mouse pointer
      if (this.mouse.active) {
        const mdx = p.x - this.mouse.x;
        const mdy = p.y - this.mouse.y;
        const mdistSq = mdx * mdx + mdy * mdy;

        if (mdistSq < 19600) { // 140*140
          const mdist = Math.sqrt(mdistSq);
          const mAlpha = (1 - mdist / 140) * 0.5;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.strokeStyle = `${p.color}${mAlpha.toFixed(2)})`;
          this.ctx.lineWidth = 1.2;
          this.ctx.stroke();
        }
      }
    }

    if (this.isRunning) {
      this.rafId = requestAnimationFrame(this.animate);
    }
  };
}
