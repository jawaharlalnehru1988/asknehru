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
      console.log(this.signUpForm.value);
      this.service.postUser(this.signUpForm.value).subscribe({
        next:(res =>{
          alert("Successfully registered");
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
