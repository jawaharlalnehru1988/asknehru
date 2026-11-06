import { Injectable, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { ApiService } from '../api.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {
  private readonly CHECK_INTERVAL_MS = 60000; // Check every 1 minute
  private readonly REFRESH_THRESHOLD_MS = 900000; // Refresh proactively if < 15 minutes until expiry
  
  private intervalId: any;
  private isBrowser: boolean;
  private isRefreshing = false;

  constructor(
    private apiService: ApiService,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.initLifecycleTracking();
      this.startSessionCheck();
      // Also check immediately on app startup
      setTimeout(() => this.checkSession(), 1000);
    }
  }

  private initLifecycleTracking(): void {
    this.ngZone.runOutsideAngular(() => {
      const handleUserResume = () => {
        // When user switches back to browser tab or mobile app resumes
        if (document.visibilityState === 'visible') {
          this.ngZone.run(() => this.checkSession());
        }
      };

      document.addEventListener('visibilitychange', handleUserResume);
      window.addEventListener('focus', handleUserResume);
      window.addEventListener('pageshow', handleUserResume);
    });
  }

  private startSessionCheck(): void {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => this.checkSession());
      }, this.CHECK_INTERVAL_MS);
    });
  }

  public checkSession(): void {
    if (this.isRefreshing) return;

    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');

    // If no tokens exist, user is not logged in
    if (!token) return;

    // If no refresh token exists, we cannot silently refresh
    if (!refreshToken) return;

    try {
      const tokenParts = token.split('.');
      if (tokenParts.length < 2) return;

      const payload = JSON.parse(atob(tokenParts[1]));
      if (payload.exp) {
        const expTimeMs = payload.exp * 1000;
        const timeUntilExp = expTimeMs - Date.now();

        // If access token has expired or is expiring within REFRESH_THRESHOLD_MS, refresh silently
        if (timeUntilExp <= this.REFRESH_THRESHOLD_MS) {
          this.isRefreshing = true;
          this.apiService.refresh({ refreshToken }).subscribe({
            next: (res) => {
              if (res?.data?.accessToken) {
                localStorage.setItem('token', res.data.accessToken);
                if (res.data.refreshToken) {
                  localStorage.setItem('refreshToken', res.data.refreshToken);
                }
              }
              this.isRefreshing = false;
            },
            error: (err) => {
              this.isRefreshing = false;
              // Only log out if backend explicitly rejected refresh token with 401
              if (err.status === 401) {
                console.warn('[SessionManager] Refresh token rejected or expired on server. Logging out.');
                this.apiService.globalLogout();
              } else {
                console.warn('[SessionManager] Temporary network issue while refreshing token; will retry on next check.');
              }
            }
          });
        }
      }
    } catch (e) {
      console.error('[SessionManager] Error parsing token:', e);
    }
  }

  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
