import { Component} from '@angular/core';
import { concatMap, from,} from 'rxjs';
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
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    const userIds = [1, 3, 4, 6, 8];

    from(userIds).pipe(
      concatMap((id) => this.apiService.getDataFromAddress(id))
    ).subscribe((user)=>{
      this.users.push(user);
      console.log('this.users :', this.users);
    })
        
  }
}

