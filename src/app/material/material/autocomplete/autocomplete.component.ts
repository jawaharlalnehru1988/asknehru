import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable, startWith } from 'rxjs';
import { MatServiceService } from '../../mat-service.service';

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

  constructor(private countryService: MatServiceService) { }
  
  ngOnInit(): void {
    this.filteringOption();
    this.getMobileCodes();
    this.getCountryDetails();
    this.countryControl.valueChanges
    .pipe(startWith(''))
    .subscribe((value) => (this.filteredCountries = this.filterCountries(value)));

  }
  
  getCountryDetails(){
    this.countryService.getCountryCode().subscribe(res => {
    this.countryData = res;
for (const countryCode in this.countryData) {
  if (this.countryData.hasOwnProperty(countryCode)) {
    const countryObject = this.countryData[countryCode];
    this.modifiedCountryArray.push(countryObject);
  }
}
// Step 1: Create a mapping of country names to their corresponding dial_code
const dialCodeMap: { [key: string]: string } = {};
this.mobileCode.forEach((country) => {
  dialCodeMap[country.name] = country.dial_code;
});
this.modifiedCountryArray.forEach((country) => {
  const dialCode = dialCodeMap[country.name];
  if (dialCode) {
    // If the name exists in dialCodeMap, push the dial_code to the country object
    country.dial_code = dialCode;
  } else {
    // If the name does not exist in dialCodeMap, set dial_code to an empty string or any other default value as needed
    country.dial_code = ''; // Or country.dial_code = 'N/A' or any other default value
  }
});
console.log(this.modifiedCountryArray);
    })
  }
  
getMobileCodes(){
  this.countryService.getMobileCode().subscribe(res => {
    this.mobileCode = res;
    console.log('this.mobileCode :', this.mobileCode);
  })
}
 
  
  filterCountries(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.modifiedCountryArray.filter(
      (country) =>
        country.name.toLowerCase().includes(filterValue) ||
        country.emoji.includes(filterValue)
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
    return country ? `${country.dial_code} ${country.name}` : '';
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
