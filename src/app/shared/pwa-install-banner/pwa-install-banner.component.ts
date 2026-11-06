import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwaService } from '../../services/pwa.service';

@Component({
  selector: 'app-pwa-install-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (pwaService.showInstallBanner() && !pwaService.isInstalled()) {
      <div class="pwa-banner-overlay" role="dialog" aria-modal="true" aria-label="Install AskNehru Application">
        <div class="pwa-banner-card">
          <!-- Close button -->
          <button 
            type="button" 
            class="pwa-close-btn" 
            (click)="dismiss()" 
            aria-label="Dismiss app install suggestion">
            <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="pwa-content">
            <!-- App Icon / Badge -->
            <div class="pwa-icon-container">
              <img src="/assets/icons/icon-192x192.png" alt="AskNehru App Icon" class="pwa-app-icon" />
              <div class="pwa-badge-dot" title="Offline ready"></div>
            </div>

            <!-- Text Content -->
            <div class="pwa-details">
              <div class="pwa-header">
                <span class="pwa-app-name">AskNehru App</span>
                <span class="pwa-status-pill">OFFLINE READY</span>
              </div>
              <p class="pwa-description">
                @if (pwaService.isIos()) {
                  Install on iOS: Tap <span class="pwa-highlight">Share ⎋</span> and select <span class="pwa-highlight">'Add to Home Screen' ➕</span>.
                } @else {
                  Install for offline access, instant loading, and fullscreen technical tutorials.
                }
              </p>
            </div>
          </div>

          <!-- Actions -->
          <div class="pwa-actions">
            <button type="button" class="pwa-btn-dismiss" (click)="dismiss()">
              {{ pwaService.isIos() ? 'Close' : 'Maybe Later' }}
            </button>
            @if (!pwaService.isIos()) {
              <button type="button" class="pwa-btn-install" (click)="install()">
                <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="pwa-btn-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Install App</span>
              </button>
            }
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .pwa-banner-overlay {
      position: fixed;
      bottom: 1.5rem;
      right: 1.5rem;
      z-index: 9999;
      max-width: 420px;
      width: calc(100vw - 3rem);
      animation: slideUpFade 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes slideUpFade {
      from {
        opacity: 0;
        transform: translateY(24px) scale(0.96);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .pwa-banner-card {
      position: relative;
      background: linear-gradient(135deg, rgba(15, 23, 42, 0.94) 0%, rgba(11, 17, 32, 0.98) 100%);
      border: 1px solid rgba(56, 189, 248, 0.3);
      border-radius: 1.125rem;
      padding: 1.25rem;
      box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(56, 189, 248, 0.15);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      color: #f8fafc;
      font-family: inherit;
    }

    .pwa-close-btn {
      position: absolute;
      top: 0.85rem;
      right: 0.85rem;
      background: transparent;
      border: none;
      color: #94a3b8;
      cursor: pointer;
      padding: 0.25rem;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;

      &:hover {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.1);
      }

      svg {
        width: 1.1rem;
        height: 1.1rem;
      }
    }

    .pwa-content {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1rem;
      padding-right: 1.5rem;
    }

    .pwa-icon-container {
      position: relative;
      flex-shrink: 0;

      .pwa-app-icon {
        width: 3.25rem;
        height: 3.25rem;
        border-radius: 0.75rem;
        object-fit: cover;
        border: 1px solid rgba(56, 189, 248, 0.4);
        box-shadow: 0 4px 12px rgba(56, 189, 248, 0.25);
      }

      .pwa-badge-dot {
        position: absolute;
        bottom: -2px;
        right: -2px;
        width: 12px;
        height: 12px;
        background: #10b981;
        border: 2px solid #0f172a;
        border-radius: 50%;
      }
    }

    .pwa-details {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .pwa-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .pwa-app-name {
      font-size: 1rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.01em;
    }

    .pwa-status-pill {
      font-size: 0.65rem;
      font-weight: 700;
      padding: 0.15rem 0.45rem;
      background: rgba(16, 185, 129, 0.15);
      color: #34d399;
      border: 1px solid rgba(16, 185, 129, 0.35);
      border-radius: 9999px;
      letter-spacing: 0.05em;
    }

    .pwa-description {
      font-size: 0.825rem;
      line-height: 1.4;
      color: #94a3b8;
      margin: 0;

      .pwa-highlight {
        color: #38bdf8;
        font-weight: 600;
      }
    }

    .pwa-actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.625rem;
      padding-top: 0.25rem;
    }

    .pwa-btn-dismiss {
      background: transparent;
      border: 1px solid rgba(148, 163, 184, 0.2);
      color: #cbd5e1;
      padding: 0.45rem 0.85rem;
      font-size: 0.8rem;
      font-weight: 600;
      border-radius: 0.625rem;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background: rgba(255, 255, 255, 0.06);
        color: #ffffff;
        border-color: rgba(148, 163, 184, 0.4);
      }
    }

    .pwa-btn-install {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
      border: 1px solid rgba(56, 189, 248, 0.5);
      color: #ffffff;
      padding: 0.45rem 1rem;
      font-size: 0.825rem;
      font-weight: 700;
      border-radius: 0.625rem;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
      transition: all 0.2s;

      &:hover {
        background: linear-gradient(135deg, #0369a1 0%, #1d4ed8 100%);
        box-shadow: 0 6px 18px rgba(37, 99, 235, 0.6);
        transform: translateY(-1px);
      }

      &:active {
        transform: translateY(0);
      }

      .pwa-btn-icon {
        width: 1rem;
        height: 1rem;
      }
    }

    @media (max-width: 640px) {
      .pwa-banner-overlay {
        bottom: 1rem;
        right: 1rem;
        left: 1rem;
        width: auto;
      }
    }
  `]
})
export class PwaInstallBannerComponent {
  readonly pwaService = inject(PwaService);

  install(): void {
    this.pwaService.promptInstall();
  }

  dismiss(): void {
    this.pwaService.dismissBanner(24);
  }
}
