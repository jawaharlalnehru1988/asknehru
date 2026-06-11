import { Component, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../api.service';

export type AuthDialogMode = 'login' | 'signup';

export interface AuthDialogData {
  mode: AuthDialogMode;
}

export function passwordMatchValidator(control: AbstractControl) {
  const form = control as FormGroup;
  const password = form.get('password')?.value;
  const confirmPassword = form.get('confirmPassword')?.value;
  if (password !== confirmPassword) {
    form.get('confirmPassword')?.setErrors({ mismatch: true });
  } else {
    const confirmErrors = form.get('confirmPassword')?.errors;
    if (confirmErrors) {
      delete confirmErrors['mismatch'];
      if (Object.keys(confirmErrors).length === 0) {
        form.get('confirmPassword')?.setErrors(null);
      } else {
        form.get('confirmPassword')?.setErrors(confirmErrors);
      }
    }
  }
  return null;
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
      fullName: [''],
      phoneNumber: [''],
      email: [''],
      usernameOrEmail: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    }, { validators: passwordMatchValidator });

    this.setupValidators();
  }

  toggleMode(): void {
    this.mode = this.mode === 'login' ? 'signup' : 'login';
    this.setupValidators();
    this.errorMessage = '';
  }

  setupValidators(): void {
    this.form.clearValidators();
    
    if (this.mode === 'signup') {
      this.form.setValidators(passwordMatchValidator);
    } else {
      this.form.setValidators(null);
    }

    // Clear all existing validators
    ['fullName', 'phoneNumber', 'email', 'usernameOrEmail', 'confirmPassword'].forEach(field => {
      this.form.get(field)?.clearValidators();
      this.form.get(field)?.updateValueAndValidity();
    });

    if (this.mode === 'signup') {
      this.form.get('fullName')?.setValidators([Validators.required, Validators.minLength(3)]);
      this.form.get('phoneNumber')?.setValidators([Validators.required]);
      this.form.get('email')?.setValidators([Validators.required, Validators.email]);
      this.form.get('confirmPassword')?.setValidators([Validators.required]);
    } else {
      this.form.get('usernameOrEmail')?.setValidators([Validators.required]);
    }

    // Trigger validation updates
    ['fullName', 'phoneNumber', 'email', 'usernameOrEmail', 'confirmPassword'].forEach(field => {
      this.form.get(field)?.updateValueAndValidity();
    });
    this.form.updateValueAndValidity();
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
        email: this.form.value.usernameOrEmail,
        password: this.form.value.password,
      };
      this.api.login(payload).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.dialogRef.close({ token: res.data.accessToken, tokenType: res.data.tokenType });
        },
        error: () => {
          this.isLoading = false;
          this.errorMessage = 'Invalid credentials.';
        },
      });
      return;
    }

    const signupPayload = {
      fullName: this.form.value.fullName,
      phoneNumber: this.form.value.phoneNumber,
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.api.register(signupPayload).subscribe({
      next: () => {
        const loginPayload = {
          email: signupPayload.email,
          password: signupPayload.password,
        };
        this.api.login(loginPayload).subscribe({
          next: (res) => {
            this.isLoading = false;
            this.dialogRef.close({ token: res.data.accessToken, tokenType: res.data.tokenType });
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
