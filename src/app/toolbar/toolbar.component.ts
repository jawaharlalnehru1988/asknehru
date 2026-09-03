import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Overlay } from '@angular/cdk/overlay';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import { UpperCasePipe } from '@angular/common';
import { environment } from '../../environments/environment';

declare const google: any;

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [
    MatToolbar,
    MatButton,
    RouterLink,
    MatIconModule,
    RouterLinkActive,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatDialogModule,
    ReactiveFormsModule,
    UpperCasePipe
  ]
})
export class ToolbarComponent implements OnInit {
  showFiller = false;

  loggedInUserData: any;
  logInObj: any;
  isSuperAdmin: boolean = false;
  initialName!: string;
  userPicture: string | null = null;
  isUserLoggedIn!: boolean;
  loggedInTrue: boolean = true;
  signInTrue!: boolean;
  isOpen = false;
  signUpForm!: FormGroup;
  isEditUser: boolean = false;
  hide: boolean = true;
  isEditPwd: boolean = false;
  isEditEmail: boolean = false;

  googleClientId = environment.googleClientId;

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private overlay: Overlay,
    private dialog: MatDialog
  ) {
    this.api.getLoginData().subscribe((booleanValue) => {
      this.loggedInTrue = booleanValue;
    });
    this.api.getSignUpData().subscribe((data) => {
      this.signInTrue = data;
    });
    this.api.authState$.subscribe(state => {
      this.isUserLoggedIn = state;
      if (state) {
        this.loggedInUser();
      } else {
        this.initialName = "";
        this.userPicture = null;
        this.isSuperAdmin = false;
      }
    });
  }

  ngOnInit(): void {
    // Default to dark theme across the platform
    document.documentElement.classList.add('dark');

    this.initGoogleAuth();

    this.signUpForm = this.formBuilder.group({
      id: [""],
      name: ["", Validators.required],
      password: ["", Validators.required],
      email: [""],
      gender: [""],
      role: [""],
      isactive: [""]
    });

    this.route.queryParams.subscribe(() => {
      this.loggedInUser();
    });

    for (const key in this.loggedInUserData) {
      if (this.loggedInUserData.hasOwnProperty(key)) {
        const control = this.signUpForm.get(key);
        if (control) {
          control.setValue(this.loggedInUserData[key]);
        }
      }
    }
  }

  initGoogleAuth(): void {
    if (typeof window === 'undefined') return;

    const checkGoogle = () => {
      if (typeof google !== 'undefined' && google.accounts?.id) {
        try {
          google.accounts.id.initialize({
            client_id: this.googleClientId,
            callback: (response: any) => this.handleGoogleCredential(response),
            auto_select: false,
            cancel_on_tap_outside: true
          });

          const btnContainer = document.getElementById('google-btn-container');
          if (btnContainer) {
            google.accounts.id.renderButton(btnContainer, {
              theme: 'filled_black',
              size: 'medium',
              shape: 'pill',
              text: 'signin_with',
              logo_alignment: 'left',
              width: 180
            });
            const fallback = document.getElementById('google-fallback-btn');
            if (fallback) {
              fallback.style.display = 'none';
            }
          }
        } catch (e) {
          console.warn('Google Identity Services notice:', e);
        }
      } else {
        setTimeout(checkGoogle, 300);
      }
    };
    checkGoogle();
  }

  handleGoogleCredential(response: any): void {
    if (!response?.credential) return;
    try {
      const payload = JSON.parse(atob(response.credential.split('.')[1]));
      const user = {
        name: payload.name || payload.email || 'User',
        email: payload.email,
        picture: payload.picture || null,
        role: payload.email === 'jawaharlalnehru@gmail.com' ? 'Super Admin' : 'User'
      };
      localStorage.setItem('token', response.credential);
      localStorage.setItem('user', JSON.stringify(user));
      this.userPicture = user.picture;
      this.api.setAuthState(true);
      this.loggedInUser();
    } catch (e) {
      console.error('Error decoding Google credential', e);
    }
  }

  signInWithGoogle(): void {
    if (typeof google !== 'undefined' && google.accounts?.id) {
      google.accounts.id.prompt((notification: any) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          this.openLoginDialog();
        }
      });
    } else {
      this.openLoginDialog();
    }
  }

  loggedInUser(): void {
    this.logInObj = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    let loggedInUserData = null;
    
    if (this.logInObj) {
      try {
        loggedInUserData = JSON.parse(this.logInObj);
        this.loggedInUserData = loggedInUserData;
        if (loggedInUserData && loggedInUserData.picture) {
          this.userPicture = loggedInUserData.picture;
        }
      } catch(e) {}
    }
    
    let userName = "";
    if (loggedInUserData && loggedInUserData.name && loggedInUserData.name !== 'User') {
      userName = loggedInUserData.name;
    } else if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        userName = payload.name || payload.email || payload.sub || "User";
        if (payload.picture) {
          this.userPicture = payload.picture;
        }
      } catch (e) {
        userName = "User";
      }
    }

    if (userName) {
      this.initialName = this.getInitials(userName);
    } else {
      this.initialName = "";
    }

    if (token) {
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
    
    this.checkIfSuperAdmin(loggedInUserData);
  }

  getObjectKeys(): string[] {
    return Object.keys(this.loggedInUserData);
  }

  checkIfSuperAdmin(loggedInUserData: any): void {
    this.isSuperAdmin = !!(loggedInUserData && loggedInUserData.role === "Super Admin");
  }

  getInitials(name: string): string {
    const parts = name.split(' ');
    const initials = parts.map(part => part.charAt(0)).join('');
    return initials;
  }

  loggedOut(): void {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      this.api.logout(refreshToken).subscribe({
        next: () => this.clearSession(),
        error: () => this.clearSession()
      });
    } else {
      this.clearSession();
    }
  }

  clearSession(): void {
    this.userPicture = null;
    if (typeof google !== 'undefined' && google.accounts?.id) {
      try {
        google.accounts.id.disableAutoSelect();
      } catch (e) {}
    }
    this.api.globalLogout();
    this.router.navigate(['']);
    this.isUserLoggedIn = false;
    this.isSuperAdmin = false;
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(AuthDialogComponent, {
      data: { mode: 'login' },
      width: '420px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.token) {
        localStorage.setItem('token', result.token);
        if (result.refreshToken) {
          localStorage.setItem('refreshToken', result.refreshToken);
        }
        localStorage.setItem('user', JSON.stringify({ name: 'User', role: 'User' }));
        this.api.setAuthState(true);
        this.loggedInUser();
      }
    });
  }

  openSignupDialog(): void {
    const dialogRef = this.dialog.open(AuthDialogComponent, {
      data: { mode: 'signup' },
      width: '420px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.token) {
        localStorage.setItem('token', result.token);
        if (result.refreshToken) {
          localStorage.setItem('refreshToken', result.refreshToken);
        }
        localStorage.setItem('user', JSON.stringify({ name: 'User', role: 'User' }));
        this.api.setAuthState(true);
        this.loggedInUser();
      }
    });
  }

  openOverlay(): void {
  }

  isDivisible(num1: number, num2: number): boolean {
    if (num2 === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return num1 % num2 === 0;
  }

  filterLongStrings(strings: string[]): string[] {
    return strings.filter(str => str.length >= 5);
  }
}
