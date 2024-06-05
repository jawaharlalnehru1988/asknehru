import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';


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
  displayedColumns: string[] = ['id', 'name', 'gender', 'email', 'password', 'role', 'isactive', 'action'];
  dataSource!: MatTableDataSource<UserData>;
  shouldExecuteFunction: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private userService: ApiService, private router: Router, private route: ActivatedRoute) {
  }
  
  ngOnInit(): void {
   this.receiveUserData();
   this.routerData();
  }
routerData(){
  this.route.queryParams.subscribe((queryParams) => {
    this.shouldExecuteFunction = queryParams['shouldExecuteFunction'] === 'true';
  });
  if (this.shouldExecuteFunction) {
    this.receiveUserData();
  }
}
refresh(){
  this.receiveUserData();
}
  receiveUserData(){
    this.userService.getUserData().subscribe((data) => {
      this.usersData = data;
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
        alert(`Record with id number "${idToDelete}" deleted successfully`);
      }), error:((err:any)=>{
        alert("Some server error is there while deleting your data");
      })
    }
    )

  }
  updateData(rowDataForUpdate: any){
    this.router.navigate(['/register'], {
      queryParams: { data: JSON.stringify(rowDataForUpdate) },
    });
  }

}
