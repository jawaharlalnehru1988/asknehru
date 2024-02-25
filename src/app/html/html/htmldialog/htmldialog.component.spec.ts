import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmldialogComponent } from './htmldialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('HtmldialogComponent', () => {
  let component: HtmldialogComponent;
  let fixture: ComponentFixture<HtmldialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule,MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: {} }, // Mock MatDialogRef
        { provide: MAT_DIALOG_DATA, useValue: {} }, // Mock MAT_DIALOG_DATA
      ],
      declarations: [ HtmldialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmldialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
