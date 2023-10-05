import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  usersData!: any[];

  constructor(private userService: ApiService) {}

  ngOnInit(): void {
    this.userService.usersData$.subscribe((data) => {
      this.usersData = data;
      console.log('this.usersData :', this.usersData);
      // Perform any component-specific logic with usersData
    });
  }

}
