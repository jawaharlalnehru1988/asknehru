import { Injectable, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { ApiService } from '../api.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {
  private lastActivityTime: number = Date.now();
  private readonly CHECK_INTERVAL_MS = 60000; // Check every 1 minute
  private readonly REFRESH_THRESHOLD_MS = 300000; // Refresh if < 5 minutes until expiry
  private readonly ACTIVITY_THRESHOLD_MS = 900000; // 15 minutes of inactivity max
  
  private intervalId: any;
  private isBrowser: boolean;
  private isRefreshing: boolean = false;

  constructor(
    private apiService: ApiService,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.initActivityTracking();
      this.startSessionCheck();
    }
  }

  private initActivityTracking() {
    this.ngZone.runOutsideAngular(() => {
      const updateActivity = () => {
        this.lastActivityTime = Date.now();
      };
      
      let timeout: any;
      const throttledUpdate = () => {
        if (!timeout) {
          timeout = setTimeout(() => {
            updateActivity();
            timeout = null;
          }, 1000);
        }
      };

      window.addEventListener('mousemove', throttledUpdate);
      window.addEventListener('keydown', throttledUpdate);
      window.addEventListener('click', throttledUpdate);
      window.addEventListener('scroll', throttledUpdate, true);
    });
  }

  private startSessionCheck() {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => this.checkSession());
      }, this.CHECK_INTERVAL_MS);
    });
  }

  private checkSession() {
    if (this.isRefreshing) return;

    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');

    if (!token || !refreshToken) return;

    const timeSinceLastActivity = Date.now() - this.lastActivityTime;
    if (timeSinceLastActivity > this.ACTIVITY_THRESHOLD_MS) {
      // Inactive user, let token naturally expire
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (payload.exp) {
        const expTimeMs = payload.exp * 1000;
        const timeUntilExp = expTimeMs - Date.now();

        if (timeUntilExp <= this.REFRESH_THRESHOLD_MS) {
          this.isRefreshing = true;
          this.apiService.refresh({ refreshToken }).subscribe({
            next: (res) => {
              if (res && res.data && res.data.accessToken) {
                localStorage.setItem('token', res.data.accessToken);
                if (res.data.refreshToken) {
                  localStorage.setItem('refreshToken', res.data.refreshToken);
                }
              }
              this.isRefreshing = false;
            },
            error: (err) => {
              console.error('Failed to refresh session proactively:', err);
              this.isRefreshing = false;
              if (timeUntilExp <= 0) {
                 this.apiService.globalLogout(); // Force logout if expired and refresh fails
              }
            }
          });
        }
      }
    } catch (e) {
      console.error('Failed to parse token in session manager', e);
    }
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
