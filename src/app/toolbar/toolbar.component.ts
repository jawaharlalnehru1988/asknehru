import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Overlay } from '@angular/cdk/overlay';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [
    MatToolbar,
    MatButton,
    RouterLink,
    MatIconModule,
    RouterLinkActive,
    MatMenu,
    MatMenuItem,
    MatDialogModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    AsyncPipe
  ]
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
  hide: boolean = true;
  isEditPwd: boolean = false;
  isEditEmail: boolean = false;
  mainTopics: string[] = [];

  topicControl = new FormControl('');
  filteredTopics!: Observable<string[]>;

  ProjectList = [
    { title: "Gym Website", routerName: "gymwebpage" },
    { title: "Yoga Website", routerName: "yoga" },
    { title: "Shop Products", routerName: "productshop" },
    { title: "Food Order", routerName: "food" },
    { title: "Tech Experts", routerName: "techexpert" },
    { title: "Fashion Collections", routerName: "fashion" },
    { title: "project Studio", routerName: "projectStudio" },
  ];

  constructor(private api: ApiService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private overlay: Overlay, private dialog: MatDialog) {
    this.api.getLoginData().subscribe((booleanValue) => {
      this.loggedInTrue = booleanValue;
    });
    this.api.getSignUpData().subscribe((data) => {
      this.signInTrue = data;
    });
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      id: [""],
      name: ["", Validators.required],
      password: ["", Validators.required],
      email: [""],
      gender: [""],
      role: [""],
      isactive: [""]
    });
    this.route.queryParams.subscribe(params => {
      this.loggedInUser();
    });
    this.api.getCourses().subscribe({
      next: (res) => {
        this.courseName = res.courses;
      }
    });

    this.api.getConversations().subscribe({
      next: (data) => {
        this.mainTopics = [...new Set(data.map((item: any) => item.mainTopic))];
        // Initialize filtered topics after data is loaded
        this.filteredTopics = this.topicControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
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

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.mainTopics.filter(topic => topic.toLowerCase().includes(filterValue));
  }

  selectTopic(topic: string | null) {
    this.api.setMainTopic(topic);
    this.router.navigate(['/articles-gallery']);
  }

  loggedInUser() {
    this.logInObj = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    const loggedInUserData = JSON.parse(this.logInObj);
    this.loggedInUserData = loggedInUserData;
    if (loggedInUserData && loggedInUserData !== null) {
      this.initialName = this.getInitials(loggedInUserData.name);
    } else {
      this.initialName = "";
    }
    if (token || (this.initialName && this.initialName !== "")) {
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
  getInitials(name: string) {
    // Split the name by spaces
    const parts = name.split(' ');
    // Map each part to its first character and join them
    const initials = parts.map(part => part.charAt(0)).join('');
    return initials;
  }
  loggedOut() {
    localStorage.clear();
    this.router.navigate(['']);
    this.isUserLoggedIn = true;
    this.isSuperAdmin = false;
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(AuthDialogComponent, {
      data: { mode: 'login' },
      width: '420px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.token) {
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', JSON.stringify({ name: 'User', role: 'User' }));
        this.loggedInUser();
      }
    });
  }

  openSignupDialog(): void {
    const dialogRef = this.dialog.open(AuthDialogComponent, {
      data: { mode: 'signup' },
      width: '420px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.token) {
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', JSON.stringify({ name: 'User', role: 'User' }));
        this.loggedInUser();
      }
    });
  }
  openOverlay() {
  }


  isDivisible(num1: number, num2: number): boolean {
    if (num2 === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return num1 % num2 === 0;
  };

  filterLongStrings(Strings: string[]): string[] {
    return Strings.filter(str => str.length >= 5);
  }
}
