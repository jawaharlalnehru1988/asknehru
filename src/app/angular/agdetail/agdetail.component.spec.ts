import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgdetailComponent } from './agdetail.component';

describe('AgdetailComponent', () => {
  let component: AgdetailComponent;
  let fixture: ComponentFixture<AgdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
