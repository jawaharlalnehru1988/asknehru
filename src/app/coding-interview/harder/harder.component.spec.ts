import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarderComponent } from './harder.component';

describe('HarderComponent', () => {
  let component: HarderComponent;
  let fixture: ComponentFixture<HarderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
