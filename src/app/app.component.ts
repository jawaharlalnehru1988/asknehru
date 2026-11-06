import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { PwaInstallBannerComponent } from './shared/pwa-install-banner/pwa-install-banner.component';
import { ApiService } from './api.service';
import { SessionManagerService } from './services/session-manager.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [ToolbarComponent, RouterOutlet, FooterComponent, PwaInstallBannerComponent]
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'asknehru';

    constructor(
      @Inject(PLATFORM_ID) private platformId: Object,
      private apiService: ApiService,
      private sessionManager: SessionManagerService
    ) {}

    ngOnInit() {
      // SessionManagerService and authInterceptor maintain persistent authentication automatically
    }

    ngOnDestroy() {}
}
