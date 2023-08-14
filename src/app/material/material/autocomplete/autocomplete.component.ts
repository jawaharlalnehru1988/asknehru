import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, startWith } from 'rxjs';
import { MatServiceService } from '../../mat-service.service';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';


export interface User{
  name: string;
}
export interface Country {
  name: string;
  emoji: string;
  unicode: string;
  image: string;
  dial_code?: string; // Make dial_code optional since it may not exist in all objects
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
  countryControl = new FormControl();
  filteredCountries! : any[];
  countryData: any;
  modifiedCountryArray: Country[] = [];
  mobileCode: { name: string; dial_code: string; code: string }[] = [];
  selectedCountry: any;
  result: number = 0;
  myInput: any;
  topics = ["Angular", "React", "Vue"]
  @ViewChild('auto3Trigger', { static : false }) auto3Trigger!: MatAutocompleteTrigger;

  numberControl = new FormControl();
  constructor(private countryService: MatServiceService) { }
  
  ngOnInit(): void {
    this.filteringOption();
    this.getMobileCodes();
    this.selectedCountry = {
      name: 'AmericanSamoa',
      dial_code: '+1684',
      image: 'https:/cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AS.svg', 

    };
  }
  onCountryControlValueChange() {
    this.countryControl.valueChanges
      .pipe(startWith(''))
      .subscribe((value:any) =>{ 
      console.log('value :', value);        
        (this.filteredCountries = this.filterCountries(value))});
  }
  
  openAutocomplete() {
    if (this.auto3Trigger) {
      setTimeout(() => {
        this.auto3Trigger.openPanel();
      }, 100); // Adjust the delay time as needed
    }
  }
getMobileCodes(){
  this.countryService.getCountryfullDetails().subscribe(res => {
    this.mobileCode = res.country;
    console.log('this.mobileCode :', this.mobileCode);
  })
}
  
  filterCountries(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.mobileCode.filter(
      (country) =>
        country.name.toLowerCase().includes(filterValue)
    )};


  filteringOption(){
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
   // Function to display the selected country information in the input field
   displayCountryFn(country: any): string {
    return country ? `${country.dial_code}` : '';
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
add(a: number, b: number): number {
  this.result = a + b;
  return this.result;
}

subtract(a: number, b: number): number {
  this.result = a - b;
  return this.result;
}
}
