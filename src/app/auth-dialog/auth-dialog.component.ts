import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../api.service';
import { environment } from '../../environments/environment';

export interface AuthDialogData {
  mode?: string;
  message?: string;
}

declare const google: any;

@Component({
  selector: 'app-auth-dialog',
  standalone: true,
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss'],
  imports: [
    MatDialogModule,
    MatButtonModule,
  ],
})
export class AuthDialogComponent implements OnInit, AfterViewInit {
  message?: string;
  isLoading = false;
  errorMessage = '';
  googleClientId = environment.googleClientId;

  constructor(
    private dialogRef: MatDialogRef<AuthDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: AuthDialogData,
    private api: ApiService
  ) {
    this.message = data?.message;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.renderGoogleButton();
  }

  renderGoogleButton(): void {
    if (typeof window === 'undefined') return;

    const tryRender = () => {
      if (typeof google !== 'undefined' && google.accounts?.id) {
        try {
          google.accounts.id.initialize({
            client_id: this.googleClientId,
            callback: (response: any) => this.handleGoogleCredential(response),
            auto_select: false,
            cancel_on_tap_outside: true
          });

          const container = document.getElementById('dialog-google-btn');
          if (container) {
            google.accounts.id.renderButton(container, {
              theme: 'filled_black',
              size: 'large',
              shape: 'rectangular',
              text: 'signin_with',
              logo_alignment: 'left',
              width: 280
            });
          }
        } catch (e) {
          console.warn('Google Identity initialization in dialog:', e);
        }
      } else {
        setTimeout(tryRender, 300);
      }
    };
    tryRender();
  }

  triggerGoogleSignIn(): void {
    if (typeof google !== 'undefined' && google.accounts?.id) {
      try {
        google.accounts.id.prompt();
      } catch (e) {
        this.errorMessage = 'Google Identity prompt failed. Please try again.';
      }
    } else {
      this.errorMessage = 'Google services are currently unavailable. Please check your connection.';
    }
  }

  handleGoogleCredential(response: any): void {
    if (!response?.credential) return;

    this.isLoading = true;
    this.errorMessage = '';

    try {
      const payload = JSON.parse(atob(response.credential.split('.')[1]));
      const email = payload.email || '';
      const isAdmin = this.api.isAdminEmail(email);
      const user = {
        name: payload.name || payload.email || 'User',
        email: email,
        picture: payload.picture || null,
        role: isAdmin ? 'Super Admin' : 'User'
      };

      localStorage.setItem('token', response.credential);
      localStorage.setItem('user', JSON.stringify(user));

      // Sync with backend database
      this.api.googleLogin({
        credential: response.credential,
        email: user.email,
        name: user.name,
        picture: user.picture
      }).subscribe({
        next: (res: any) => {
          this.isLoading = false;
          let activeToken = response.credential;
          let refreshToken = null;
          if (res?.data?.accessToken) {
            activeToken = res.data.accessToken;
            localStorage.setItem('token', activeToken);
            if (res.data.refreshToken) {
              refreshToken = res.data.refreshToken;
              localStorage.setItem('refreshToken', refreshToken);
            }
          }
          this.api.setAuthState(true);
          this.dialogRef.close({ token: activeToken, refreshToken, user });
        },
        error: (err: any) => {
          this.isLoading = false;
          console.warn('Backend Google auth sync note, continuing with credential:', err);
          this.api.setAuthState(true);
          this.dialogRef.close({ token: response.credential, user });
        }
      });
    } catch (e) {
      this.isLoading = false;
      this.errorMessage = 'Failed to decode Google account details.';
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
