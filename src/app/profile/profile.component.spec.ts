import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Person, ProfileComponent } from './profile.component';

fdescribe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should return average age", ()=>{
    const people = [
      {name: "ram", age: 23},
      {name: "keshav", age: 27},
    ];

    const result = component.calculateAverageAge(people);
    expect(result).toBe(25);
  });

  it('should return zero if the array is empty', ()=>{
    const people:Person[] = [];
    const result = component.calculateAverageAge(people);
    expect(result).toBe(0);    
  });

  it('should return single person correctly', ()=>{
    const person: Person[] = [{name: "ram", age: 24}];
    const result = component.calculateAverageAge(person);
    expect(result).toBe(24); 
  })

});
