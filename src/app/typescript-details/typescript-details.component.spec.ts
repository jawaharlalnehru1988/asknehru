import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptDetailsComponent } from './typescript-details.component';

describe('TypescriptDetailsComponent', () => {
  let component: TypescriptDetailsComponent;
  let fixture: ComponentFixture<TypescriptDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypescriptDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypescriptDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
