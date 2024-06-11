import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss']
})
export class CssComponent {
 
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      items: this.fb.array([this.createItem()])
    });

       this.items.controls.forEach((control: AbstractControl) => {
        const group = control as FormGroup;
        group.get('name')?.valueChanges.subscribe(value => {
        console.log('Name Value Changes:', value);
      });

      group.get('description')?.valueChanges.subscribe(value => {
        console.log('Description Value Changes:', value);
      });
    });
 }

  get items(): FormArray {
    return this.myForm.get('items') as FormArray;
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  addItem(): void {
    this.items.push(this.createItem());
    this.subscribeToItemValueChanges();
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.myForm.value);
  }

  subscribeToItemValueChanges(): void {
    
    this.items.controls.forEach((control: AbstractControl) => {
      control.get('name')?.valueChanges.subscribe(value => {
        console.log('Name Value Changes:', value);
      });

      control.get('description')?.valueChanges.subscribe(value => {
        console.log('Description Value Changes:', value);
      });
    });
   
  }
}
  
