import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { concat } from 'core-js/core/array';
import { concatMap, filter, first, from, last, map, merge, mergeMap, Observable, of, skip, switchMap, take, takeLast, takeUntil, tap} from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'], // Corrected property name
})
export class RxjsComponent {
  users: any[] = [];
  constructor(private apiService: ApiService, private http: HttpClient) {}
  ngOnInit() {
    const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    from(userIds)
      .pipe(concatMap((id) => this.apiService.getDataFromAddress(id)))
      .subscribe((user) => {
        console.log('user :', user);
        this.users.push(user);
      });
    console.log(' this.users :', this.users);
  }

  getUserData() {
    this.apiService.getAllEssays().pipe(
      mergeMap((data:any) => {
        return from(data);
      }),
      skip(4),
    ).subscribe((response: any) => {
        console.log('response :', response);

      });
  }

  addUser() {
    this.getUserData();
  }
}

