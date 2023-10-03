import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  usersData: any;
  constructor(private service: ApiService, private formBuilder: FormBuilder, private router: Router ) { 
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password : ["", Validators.required]
    });
  }

  ngOnInit(): void {
    this.service.getUser().subscribe( {
      next: (res:any)=>{
        this.usersData = res;
        console.log('this.usersData :', this.usersData);
      },
      error: (Error)=>{
        alert("there is a problem while fetching user's dara");
      }
    }
    )
  }
  
  save(){
    
    const formData = this.loginForm.value;
    // Find a user in this.usersData that matches the provided userName and password
    const matchedUser = this.usersData.find((user:any) => user.name === formData.userName && user.password === formData.password
    );
  
    if (matchedUser) {
      // Redirect to the home component if a matching user is found
      this.router.navigate(['']);
    } else {
      alert('Invalid username or password');
    }
    }
  cancel(){
    this.router.navigate(['']);
  }
}
