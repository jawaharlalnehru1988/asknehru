import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Overlay } from '@angular/cdk/overlay';
import { ProfileComponent } from '../profile/profile.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  showFiller = false;
  courseName: any;
  loggedInUserData: any; // Define a variable to store the user data
  logInObj: any;
  isSuperAdmin: boolean = false;
  initialName!: string;
  isUserLoggedIn!: boolean;
  loggedInTrue: boolean = true;
  signInTrue!: boolean;
  isOpen = false;
  signUpForm!: FormGroup;
  isEditUser: boolean = false;
  hide : boolean = true;
  isEditPwd: boolean = false;
  isEditEmail: boolean = false;
  ProjectList = [
    {title: "Gym Website", routerName: "gymwebpage"},
    {title: "Yoga Website", routerName: "yoga"},
    {title: "Shop Products", routerName: "productshop"},
    {title: "Food Order", routerName: "food"},
    {title: "Tech Experts", routerName: "techexpert"},
    {title: "Fashion Collections", routerName: "fashion"},
    {title: "project Studio", routerName: "projectStudio"},
  ];

  constructor(private api: ApiService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private overlay: Overlay) { 
    this.api.getLoginData().subscribe((booleanValue) => {
      this.loggedInTrue = booleanValue;
    });
    this.api.getSignUpData().subscribe((data)=>{
      this.signInTrue = data;
    })
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      id:[""],
      name: ["", Validators.required],
      password : ["", Validators.required],
      email:[""],
      gender:[""],
      role:[""],
      isactive:[""]
    });
    this.route.queryParams.subscribe(params => {
      this.loggedInUser();
    });
    this.api.getCourses().subscribe({
      next: (res) => {
        this.courseName = res.courses;
      }
    });

for (const key in this.loggedInUserData) {
  if (this.loggedInUserData.hasOwnProperty(key)) {
    const control = this.signUpForm.get(key);
    if (control) {
      control.setValue(this.loggedInUserData[key]);
    }
  }
}
  }

  loggedInUser(){
    this.logInObj =  localStorage.getItem('user');
    const loggedInUserData = JSON.parse(this.logInObj);
    this.loggedInUserData = loggedInUserData;
    if (loggedInUserData && loggedInUserData !== null) {
      this.initialName = this.getInitials(loggedInUserData.name);
    } else {
      this.initialName = "";
    }
    if (this.initialName && this.initialName !== "") {
      this.isUserLoggedIn = false;
    } else {
      this.isUserLoggedIn = true;
    }
this.checkIfSuperAdmin(loggedInUserData);
}

getObjectKeys() {
  return Object.keys(this.loggedInUserData);
}
checkIfSuperAdmin(loggedInUserData: any) {
  this.isSuperAdmin = !!(loggedInUserData && loggedInUserData.role === "Super Admin");
}
   getInitials(name : string) {
    // Split the name by spaces
    const parts = name.split(' ');
    // Map each part to its first character and join them
    const initials = parts.map(part => part.charAt(0)).join('');
    return initials;
  }
  loggedOut(){
    localStorage.clear();
    this.router.navigate(['']);
    this.isUserLoggedIn = true;
    this.isSuperAdmin = false;
  }
  openOverlay() {
    // Create the overlay ref.
    const overlayRef = this.overlay.create();
    // Create the component portal.
    const componentPortal = new ComponentPortal(ProfileComponent);
    // Attach the component to the overlay.
    overlayRef.attach(componentPortal);
  }
  save(signValue:any){
      this.onUpdateData(signValue.id, signValue);
    }
  onUpdateData(id: number, updateData: any) {
      this.api.updateData(id, updateData).subscribe(
        (response) => {
          this.signUpForm.reset();
          alert('Data updated successfully:');
          this.isOpen = false;
        },
        (error) => {
          console.error('Error updating data:', error);
          alert('Error updating data');
        }
      );
    }

    toggleEditMode(value : string) {
    switch (value) {
      case 'username':
        this.isEditUser = !this.isEditUser;
        break;
      case 'password':
        this.isEditPwd = !this.isEditPwd;
        break;
      case 'email':
        this.isEditEmail = !this.isEditEmail;
        break;

      default:
        break;
    }
    }
}
