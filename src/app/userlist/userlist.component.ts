import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent implements OnInit {
  usersData!: any[];
  displayedColumns: string[] = ['id', 'name', 'gender', 'email', 'password', 'role', 'action'];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private userService: ApiService) {}

  ngOnInit(): void {
    this.userService.usersData$.subscribe((data) => {
      this.usersData = data;
      console.log('this.usersData :', this.usersData);
      // Perform any component-specific logic with usersData
      this.dataSource = new MatTableDataSource(this.usersData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteRow(idToDelete: any){
    this.userService.deleteRecordById(idToDelete).subscribe({
      next:((res:any)=>{
        alert(`Record with id number " ${idToDelete} " deleted successfully`);
      }), error:((err:any)=>{
        alert("Some server error is there while deleting your data");
      })
    }
    )

  }
}
