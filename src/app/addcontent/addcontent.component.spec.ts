import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcontentComponent } from './addcontent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('AddcontentComponent', () => {
  let component: AddcontentComponent;
  let fixture: ComponentFixture<AddcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddcontentComponent],
    imports: [MatDialogModule], 
    providers: [
      { provide: MatDialogRef, useValue: {} },
      { provide: MAT_DIALOG_DATA, useValue: {} }, // Provide an empty value for MatDialogData
    ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
