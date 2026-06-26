import { Component, HostListener, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { ApiService } from './api.service';
import { SessionManagerService } from './services/session-manager.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [ToolbarComponent, RouterOutlet, FooterComponent]
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'asknehru';
    private inactivityTimer: any;
    // 60 minutes for production
    private readonly INACTIVITY_LIMIT_MS = 3600000;

    constructor(
      @Inject(PLATFORM_ID) private platformId: Object,
      private apiService: ApiService,
      private sessionManager: SessionManagerService
    ) {}

    ngOnInit() {
      if (isPlatformBrowser(this.platformId)) {
        this.resetInactivityTimer();
      }
    }

    ngOnDestroy() {
      this.clearInactivityTimer();
    }

    @HostListener('window:mousemove')
    @HostListener('window:keydown')
    @HostListener('window:click')
    @HostListener('window:scroll')
    onUserActivity() {
      this.resetInactivityTimer();
    }

    private resetInactivityTimer() {
      this.clearInactivityTimer();
      if (typeof window !== 'undefined') {
        this.inactivityTimer = setTimeout(() => {
          this.handleInactivity();
        }, this.INACTIVITY_LIMIT_MS);
      }
    }

    private clearInactivityTimer() {
      if (this.inactivityTimer) {
        clearTimeout(this.inactivityTimer);
      }
    }

    private handleInactivity() {
      if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('token')) {
        console.log('User logged out due to inactivity');
        this.apiService.globalLogout();
      }
    }
}
