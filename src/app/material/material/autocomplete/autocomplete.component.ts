import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable, startWith } from 'rxjs';
export interface User{
  name: string;
}
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  myControl = new FormControl('');
  myControl2 = new FormControl<string | User>('');
  options: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'];
  filteredOptions!: Observable<string[]>;
options2: User[] = [{name: 'Mary'}, {name: 'Shelly'}, {name: 'Igor'}];
  selectedFruit!: string; // Add the selectedFruit property here
  filteredOptions2!: Observable<User[]>;
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value || '')),
      );

      this.filteredOptions2 =  this.myControl2.valueChanges.pipe(
        startWith(''),
        map(value=>{
          const name = typeof value === 'string' ? value: value?.name;
          return name ? this.filter2(name as string): this.options2.slice();
        }),
      );
  }
  _filter(value: string): string[]{
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
displayFn(user: User): string{
return user && user.name ? user.name : '';
}

private filter2(name:string): User[]{
const filterValue2 = name.toLowerCase();
return this.options2.filter(option => option.name.toLowerCase().includes(filterValue2));
}
}
