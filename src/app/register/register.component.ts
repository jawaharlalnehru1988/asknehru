import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUpForm!: FormGroup;
  constructor(private service: ApiService, private formBuilder: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      id:[""],
      name: ["", Validators.required],
      password : ["", Validators.required],
      email:["", Validators.required],
      gender:["", Validators.required],
      role:[""],
      isactive:[""]
    });
  }
  save(){
    if (this.signUpForm.valid) {
      const formData = {
        "data": [{
          id:  this.signUpForm.value.id,
          name: this.signUpForm.value.name,
          password: this.signUpForm.value.password,
          email: this.signUpForm.value.email,
          gender: this.signUpForm.value.gender,
          role: this.signUpForm.value.role,
          isactive: this.signUpForm.value.isactive
        }]
      }
      this.service.postUser(formData).subscribe({
        next:(res =>{
          this.signUpForm.reset();
          alert("Successfully registered");
          setTimeout(()=>{
            this.router.navigate(['/login']);
          }, 2000);
        }),
        error:(err=>{
        console.log('err :', err);
          alert("Some error occurs while saving your data");

        })
      })
      
    } else {
      
    }

  }
  cancel(){
    this.router.navigate(['']);
  }
}
