import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolbarComponent } from './toolbar.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApiService } from '../api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [OverlayModule, MatMenuModule, BrowserAnimationsModule, RouterTestingModule, ReactiveFormsModule, MatToolbarModule, MatIconModule, ToolbarComponent],
    providers: [ApiService, { provide: MatDialogRef, useValue: {} }, // Mock MatDialogRef
        { provide: MAT_DIALOG_DATA, useValue: {} }, provideHttpClient(withInterceptorsFromDi())]
})
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should divide the first number by second number", ()=> {
    const result = component.isDivisible(4, 2);
    expect(result).toBe(true);
    expect(component.isDivisible(10, 5)).toBe(true);
  });

  it('should return false if the second number is not divisible', ()=> {
    expect(component.isDivisible(10, 4)).toBe(false);
  });

  it('should throw error if the second number is 0', ()=> {
    expect(()=> component.isDivisible(10, 0)).toThrow(new Error("Division by zero is not allowed"));
  });

  it('should return array of string which has atleast 5 character', ()=> {
    const input = ["hare", "Krishna", "Radha", "rama", "Balarama"];
    const expOutput = ["Krishna", "Radha", "Balarama"];
    expect(component.filterLongStrings(input)).toEqual(expOutput);
  });

});
