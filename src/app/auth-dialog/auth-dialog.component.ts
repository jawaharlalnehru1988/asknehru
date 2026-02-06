import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../api.service';

export type AuthDialogMode = 'login' | 'signup';

export interface AuthDialogData {
  mode: AuthDialogMode;
}

@Component({
  selector: 'app-auth-dialog',
  standalone: true,
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss'],
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class AuthDialogComponent {
  mode: AuthDialogMode;
  form: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(
    private dialogRef: MatDialogRef<AuthDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: AuthDialogData,
    private api: ApiService,
    private formBuilder: FormBuilder,
  ) {
    this.mode = data.mode;
    this.form = this.formBuilder.group({
      username: [''],
      email: [''],
      usernameOrEmail: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    if (this.mode === 'signup') {
      this.form.get('username')?.setValidators([Validators.required, Validators.minLength(3)]);
      this.form.get('email')?.setValidators([Validators.required, Validators.email]);
    } else {
      this.form.get('usernameOrEmail')?.setValidators([Validators.required]);
    }
  }

  submit(): void {
    this.errorMessage = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    if (this.mode === 'login') {
      const payload = {
        usernameOrEmail: this.form.value.usernameOrEmail,
        password: this.form.value.password,
      };
      this.api.login(payload).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.dialogRef.close({ token: res.token, tokenType: res.tokenType });
        },
        error: () => {
          this.isLoading = false;
          this.errorMessage = 'Invalid credentials.';
        },
      });
      return;
    }

    const signupPayload = {
      username: this.form.value.username,
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.api.register(signupPayload).subscribe({
      next: () => {
        const loginPayload = {
          usernameOrEmail: signupPayload.email,
          password: signupPayload.password,
        };
        this.api.login(loginPayload).subscribe({
          next: (res) => {
            this.isLoading = false;
            this.dialogRef.close({ token: res.token, tokenType: res.tokenType });
          },
          error: () => {
            this.isLoading = false;
            this.errorMessage = 'Signup succeeded, but auto-login failed.';
          },
        });
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.message || 'Signup failed.';
      },
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
