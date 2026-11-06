import { Injectable, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private deferredPrompt: any = null;
  
  // Reactive state signals
  readonly canInstall = signal<boolean>(false);
  readonly showInstallBanner = signal<boolean>(false);
  readonly isInstalled = signal<boolean>(false);
  readonly isIos = signal<boolean>(false);

  private readonly DISMISS_KEY = 'asknehru_pwa_dismissed_until';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.initPwa();
    }
  }

  private initPwa(): void {
    // 1. Check if running in standalone (already installed)
    const isStandalone = 
      window.matchMedia('(display-mode: standalone)').matches || 
      (window.navigator as any).standalone === true;
    
    if (isStandalone) {
      this.isInstalled.set(true);
      return;
    }

    // 2. Detect iOS Safari
    const ua = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(ua);
    this.isIos.set(isIosDevice);

    // 3. Register Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('[PWA] Service Worker registered with scope:', registration.scope);
          })
          .catch((error) => {
            console.error('[PWA] Service Worker registration failed:', error);
          });
      });
    }

    // 4. Capture native beforeinstallprompt
    window.addEventListener('beforeinstallprompt', (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      this.deferredPrompt = e;
      this.canInstall.set(true);

      // Trigger automatic install suggestion after page visit delay
      this.scheduleInstallSuggestion();
    });

    // 5. Detect successful install
    window.addEventListener('appinstalled', () => {
      console.log('[PWA] App installed successfully');
      this.isInstalled.set(true);
      this.canInstall.set(false);
      this.showInstallBanner.set(false);
      this.deferredPrompt = null;
    });

    // 6. For iOS Safari, schedule suggestion if not dismissed
    if (isIosDevice && !isStandalone) {
      this.scheduleInstallSuggestion();
    }
  }

  private scheduleInstallSuggestion(): void {
    const dismissedUntil = localStorage.getItem(this.DISMISS_KEY);
    if (dismissedUntil && Date.now() < parseInt(dismissedUntil, 10)) {
      // User dismissed within the last 24 hours
      return;
    }

    // Wait 3.5 seconds after page load before gently presenting the suggestion banner
    setTimeout(() => {
      if (!this.isInstalled()) {
        this.showInstallBanner.set(true);
      }
    }, 3500);
  }

  async promptInstall(): Promise<void> {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      const { outcome } = await this.deferredPrompt.userChoice;
      console.log('[PWA] User choice:', outcome);
      if (outcome === 'accepted') {
        this.showInstallBanner.set(false);
      }
      this.deferredPrompt = null;
      this.canInstall.set(false);
    }
  }

  dismissBanner(hours = 24): void {
    this.showInstallBanner.set(false);
    const expireTime = Date.now() + (hours * 60 * 60 * 1000);
    localStorage.setItem(this.DISMISS_KEY, expireTime.toString());
  }

  openBannerManually(): void {
    this.showInstallBanner.set(true);
  }
}
