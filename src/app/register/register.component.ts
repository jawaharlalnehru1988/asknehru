import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: true,
    imports: [MatCard, MatCardHeader, MatCardContent, ReactiveFormsModule, MatFormField, MatLabel, MatRadioGroup, MatRadioButton, MatButton, RouterLink]
})
export class RegisterComponent implements OnInit {
  signUpForm!: FormGroup;
  updateRoute: boolean = false;
  abcd:any;
  @ViewChild('phone', { static: false }) phone! : ElementRef ;
  selectedCode: any;
  constructor(private service: ApiService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.service.setSignUpData(true);
        this.signUpForm = this.formBuilder.group({
      id:[""],
      name: ["", Validators.required, Validators.minLength(3), Validators.maxLength(25)],
      password : ["", Validators.required],
      email:["", Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)],
      role:[""],
      isactive:[""],
      countryCode : [""],
      mobile: [""]
    });
this.routeValueSet();
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
          role: this.signUpForm.value.role,
          isactive: this.signUpForm.value.isactive,
          countryCode: this.signUpForm.value.countryCode,
          mobile : this.signUpForm.value.mobile
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
