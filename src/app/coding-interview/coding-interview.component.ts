import { Component, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-coding-interview',
  standalone: true,
  imports: [RouterModule, MatDialogModule],
  templateUrl: './coding-interview.component.html',
  styleUrls: ['./coding-interview.component.scss']
})
export class CodingInterviewComponent implements OnInit {
  ready = false;
  errorMessage = '';
  successMessage = '';
  isAuthenticated = false;

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.apiService.authState$.subscribe(state => {
      this.isAuthenticated = state;
    });
    this.ready = true;
  }

  openLoginDialog(): void {
    this.dialog.open(AuthDialogComponent, {
      data: { mode: 'login' },
      panelClass: 'auth-dialog-container',
      disableClose: false,
      maxWidth: '100vw',
    });
  }
}