import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  usersData: any;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private service: ApiService, private formBuilder: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password : ["", Validators.required]
    });

    this.service
    .getUserData()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
      next: (res: any) => {
        this.usersData = res;
      },
      error: (error) => {
        alert("There is a problem while fetching user's data");
      }
    });
  }
  ngOnDestroy(): void {
    // Unsubscribe when the component is destroyed
    this.unsubscribe$.next();
    this.unsubscribe$.complete();    
  }
  submitLogin(){
    const formData = this.loginForm.value;
    // Find a user in this.usersData that matches the provided userName and password
    const matchedUser = this.usersData.find((user:any) => user.name == formData.userName && user.password == formData.password
    );
  
    if (matchedUser) {
      // Redirect to the home component if a matching user is found
      this.loginForm.reset();
      alert("You are successfully Logged in!");
      setTimeout(() => {
        this.router.navigate(['']);   
      }, 1000);
    } else {
      alert('Invalid username or password');
    }
    }
  cancel(){
    this.router.navigate(['']);
  }
}
