import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  Output,
  EventEmitter
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnChanges, OnDestroy {
  @Input() audioUrl: string | null = null;
  @Input() autoPlay: boolean = false;
  @Output() audioEnded = new EventEmitter<void>();
  @Output() playStarted = new EventEmitter<void>();
  @ViewChild('audioEl') audioEl!: ElementRef<HTMLAudioElement>;

  isPlaying = false;
  isLoading = false;
  hasError = false;
  currentTime = 0;
  duration = 0;
  playbackRate = 1;
  readonly rates = [1, 1.5, 2, 0.75];
  private rateIndex = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['audioUrl']) {
      this.reset();
      if (this.autoPlay && this.audioUrl) {
        // slight delay to ensure audio element is ready
        setTimeout(() => this.togglePlay(), 100);
      }
    }
  }

  ngOnDestroy(): void {
    this.pause();
  }

  // ── Playback controls ──────────────────────────────────────────────

  togglePlay(): void {
    if (!this.audioEl) return;
    const audio = this.audioEl.nativeElement;
    if (this.isPlaying) {
      audio.pause();
    } else {
      this.isLoading = true;
      audio.play().catch(() => {
        this.hasError = true;
        this.isLoading = false;
        this.cdr.markForCheck();
      });
    }
  }

  pause(): void {
    this.audioEl?.nativeElement.pause();
  }

  seekBy(seconds: number): void {
    if (!this.audioEl) return;
    const audio = this.audioEl.nativeElement;
    audio.currentTime = Math.max(0, Math.min(audio.duration || 0, audio.currentTime + seconds));
  }

  cycleSpeed(): void {
    this.rateIndex = (this.rateIndex + 1) % this.rates.length;
    this.playbackRate = this.rates[this.rateIndex];
    if (this.audioEl) {
      this.audioEl.nativeElement.playbackRate = this.playbackRate;
    }
  }

  onSeek(event: Event): void {
    if (!this.audioEl) return;
    const value = +(event.target as HTMLInputElement).value;
    this.audioEl.nativeElement.currentTime = value;
  }

  // ── Audio element events ───────────────────────────────────────────

  onPlay(): void {
    this.isPlaying = true;
    this.isLoading = false;
    this.hasError = false;
    this.playStarted.emit();
  }

  onPause(): void {
    this.isPlaying = false;
  }

  onTimeUpdate(): void {
    if (!this.audioEl) return;
    this.currentTime = this.audioEl.nativeElement.currentTime;
  }

  onDurationChange(): void {
    if (!this.audioEl) return;
    this.duration = this.audioEl.nativeElement.duration;
  }

  onEnded(): void {
    this.isPlaying = false;
    this.currentTime = 0;
    if (this.audioEl) this.audioEl.nativeElement.currentTime = 0;
    this.audioEnded.emit();
  }

  onError(): void {
    this.hasError = true;
    this.isLoading = false;
    this.isPlaying = false;
  }

  onCanPlay(): void {
    this.isLoading = false;
  }

  // ── Helpers ────────────────────────────────────────────────────────

  get progressPercent(): number {
    return this.duration > 0 ? (this.currentTime / this.duration) * 100 : 0;
  }

  formatTime(seconds: number): string {
    if (!seconds || isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  private reset(): void {
    this.isPlaying = false;
    this.isLoading = false;
    this.hasError = false;
    this.currentTime = 0;
    this.duration = 0;
    this.rateIndex = 0;
    this.playbackRate = 1;
  }
}
