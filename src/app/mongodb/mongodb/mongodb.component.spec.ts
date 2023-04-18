import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MongodbComponent } from './mongodb.component';

describe('MongodbComponent', () => {
  //Arrange
  let component: MongodbComponent;
  let fixture: ComponentFixture<MongodbComponent>;

  beforeEach(async () => {
    // Configure testing Module
    // Import component, providers etc
    // Module in angular
    
    await TestBed.configureTestingModule({
      declarations: [ MongodbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MongodbComponent);
    component = fixture.componentInstance;
    const queryElement = fixture.debugElement.query((By.css(".brand")));
    fixture.detectChanges();
  });

  it('should create', () => {
    // Act
    let ram = 0;
    //Assert
    expect(component).toBeTruthy();
  });
});

// fdescribe("hellor is this is describe", ()=>{
//   it("this is it statement, i mean spec section", ()=>{
//     const tax = 20;
//     expect(tax).toBe(20);
    
//   })
// })