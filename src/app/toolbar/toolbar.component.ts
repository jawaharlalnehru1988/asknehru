import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  showFiller = false;
  courseName: any;
  loggedInUserData: any; // Define a variable to store the user data
  logInObj: any;
  isSuperAdmin: boolean = false;
  initialName!: string;
  isUserLoggedIn!: boolean;
  loggedInTrue!: boolean;
  signInTrue!: boolean;

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { 
    this.api.getLoginData().subscribe((data) => {
      this.loggedInTrue = data;
    });
    this.api.getSignUpData().subscribe((data)=>{
      this.signInTrue = data;
    })
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.loggedInUser();
      const param1 = params['loggedInUser'];
      console.log('param1 :', param1);
    
    });
this.api.getCourses().subscribe({
  next:(res)=>{
    this.courseName = res.courses;
    
  }
});

  }


  loggedInUser(){
    this.logInObj =  localStorage.getItem('user');
    const loggedInUserData = JSON.parse(this.logInObj);
    if (loggedInUserData && loggedInUserData !== null) {
      
      this.initialName = this.getInitials(loggedInUserData.name);
    } else {
      
      this.initialName = "";
    }
    console.log('this.initialName :', this.initialName);
    if (this.initialName && this.initialName !== "") {
      this.isUserLoggedIn = false;
    } else {
      this.isUserLoggedIn = true;
    }
this.checkIfSuperAdmin(loggedInUserData);
}
checkIfSuperAdmin(loggedInUserData: any) {
  this.isSuperAdmin = loggedInUserData && loggedInUserData.role === "Super Admin" ? true : false;
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
}
