import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularComponent } from './angular.component';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AngularComponent', () => {
  let component: AngularComponent;
  let fixture: ComponentFixture<AngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularComponent ],
      imports:[HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
