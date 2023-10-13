import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor() { 
    
  }
  
  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }
    // Method to check if the user is authenticated
  isAuthenticatedUser() {
      return this.isAuthenticated;
  }

}
