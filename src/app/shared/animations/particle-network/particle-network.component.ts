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
  private mouse = { x: -1000, y: -1000, active: false };
  private unlistenMouseMove?: () => void;
  private unlistenMouseLeave?: () => void;
  private resizeObserver?: ResizeObserver;

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
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
    }
    this.unlistenMouseMove?.();
    this.unlistenMouseLeave?.();
    this.resizeObserver?.disconnect();
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

      // Mouse tracking
      const onMouseMove = (e: MouseEvent) => {
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
      this.animate();
    });
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

    const count = Math.min(Math.floor((width * height) / 12000), 75);
    this.particles = [];

    for (let i = 0; i < count; i++) {
      const colorPrefix = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1.2,
        color: colorPrefix,
        alpha: Math.random() * 0.5 + 0.3
      });
    }
  }

  private animate = (): void => {
    if (!this.ctx) return;
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

      // Draw particle dot with glow
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `${p.color}${p.alpha})`;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = `${p.color}0.8)`;
      this.ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < pLen; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          const lineAlpha = (1 - dist / 110) * 0.22;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(148, 163, 184, ${lineAlpha})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.shadowBlur = 0;
          this.ctx.stroke();
        }
      }

      // Connect to mouse pointer
      if (this.mouse.active) {
        const mdx = p.x - this.mouse.x;
        const mdy = p.y - this.mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < 140) {
          const mAlpha = (1 - mdist / 140) * 0.5;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.strokeStyle = `${p.color}${mAlpha})`;
          this.ctx.lineWidth = 1.2;
          this.ctx.stroke();
        }
      }
    }

    this.rafId = requestAnimationFrame(this.animate);
  };
}
