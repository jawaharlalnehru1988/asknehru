import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchQuery: string = '';
  loading: boolean = true;
  error: string | null = null;
  isSuperAdmin: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isSuperAdmin = this.apiService.isSuperAdmin();
    if (!this.isSuperAdmin) {
      this.router.navigate(['/home']);
      return;
    }
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.error = null;
    this.apiService.getUsers().subscribe({
      next: (data) => {
        this.users = data || [];
        this.applyFilter();
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching users list:', err);
        this.error = 'Failed to load user list. Please verify your administrator credentials.';
        this.loading = false;
      }
    });
  }

  applyFilter(): void {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q) {
      this.filteredUsers = [...this.users];
    } else {
      this.filteredUsers = this.users.filter(u =>
        (u.email && u.email.toLowerCase().includes(q)) ||
        (u.username && u.username.toLowerCase().includes(q)) ||
        (u.fullName && u.fullName.toLowerCase().includes(q))
      );
    }
  }

  getAdminCount(): number {
    return this.users.filter(u => u.role === 'Super Admin' || u.isSuperuser || u.isStaff).length;
  }
}
