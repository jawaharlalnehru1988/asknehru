import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingSetupComponent } from './coding-setup.component';

describe('CodingSetupComponent', () => {
  let component: CodingSetupComponent;
  let fixture: ComponentFixture<CodingSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
