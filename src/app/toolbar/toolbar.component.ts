import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Overlay } from '@angular/cdk/overlay';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    standalone: true,
    imports: [
        MatToolbar,
        MatButton,
        RouterLink,
        MatIcon,
        MatMenuTrigger,
        RouterLinkActive,
        MatMenu,
        MatMenuItem,
    ],
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
    });
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
  }
  save(signValue:any){
      this.onUpdateData(signValue.id, signValue);
    }
  onUpdateData(id: number, updateData: any) {
      this.api.updateData(id, updateData).subscribe( {next:(
        response:any) => {
          this.signUpForm.reset();
          alert('Data updated successfully:');
          this.isOpen = false;
        }, error: (error)=>{
          console.error('Error updating data:', error);
          alert('Error updating data');
        }
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

    isDivisible(num1: number, num2: number): boolean {
      if(num2 === 0){
        throw new Error("Division by zero is not allowed");
      }
      return num1 % num2 === 0;
    };

    filterLongStrings(Strings: string[]): string[]{
      return Strings.filter(str => str.length >= 5);
    }
}
