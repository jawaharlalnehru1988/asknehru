import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperEasyComponent } from './super-easy.component';

describe('SuperEasyComponent', () => {
  let component: SuperEasyComponent;
  let fixture: ComponentFixture<SuperEasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperEasyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperEasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
