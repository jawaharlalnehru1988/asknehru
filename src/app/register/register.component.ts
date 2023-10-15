import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as intlTelInput from 'intl-tel-input';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUpForm!: FormGroup;
  updateRoute: boolean = false;
  constructor(private service: ApiService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const inputElement = document.getElementById('#phone');
    if (inputElement) {
      intlTelInput(inputElement,{
        initialCountry: 'us',
        separateDialCode: true,
        utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js'
      })
    }
    this.signUpForm = this.formBuilder.group({
      id:[""],
      name: ["", Validators.required],
      password : ["", Validators.required],
      email:[""],
      gender:[""],
      role:[""],
      isactive:[""]
    });
this.routeValueSet();
this.service.setSignUpData(true);
  }
  //the routeValueSet is to setvalue dynamically to the formcontrol
  routeValueSet(){
    this.route.queryParams.subscribe(params => {
      if (params['data']) {
        this.updateRoute = true;
         const objForUpdate = JSON.parse(params['data']);
         //the below code is the optimised way of setting values to form field
        for (const key in objForUpdate) {
          if (objForUpdate.hasOwnProperty(key)) {
            const control = this.signUpForm.get(key);
            if (control) {
              control.setValue(objForUpdate[key]);
            }
          }
        }
      }
    });
  }
  ngOnDestroy(): void {
    this.service.setSignUpData(false);
  }
  onUpdateData(id: number, updateData: any) {
    this.service.updateData(id, updateData).subscribe(
      (response) => {
        this.signUpForm.reset();
        alert('Data updated successfully:');
        this.router.navigate(['/userlist'], { queryParams: { shouldExecuteFunction: true } });
      },
      (error) => {
        console.error('Error updating data:', error);
        alert('Error updating data');
      }
    );
  }
  save(input:any, signValue:any){
  if (input) {
    this.onUpdateData(signValue.id, signValue);
  } else {
    this.postMethod();
  }
  }

  postMethod(){
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
      alert("please enter valid data in the form");
    }
  }
  cancel(){
    this.router.navigate(['']);
  }
}
