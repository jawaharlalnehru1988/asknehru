import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDemystifyComponent } from './angular-demystify.component';

describe('AngularDemystifyComponent', () => {
  let component: AngularDemystifyComponent;
  let fixture: ComponentFixture<AngularDemystifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularDemystifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularDemystifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
