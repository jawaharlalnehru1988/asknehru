import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsabasicsComponent } from './dsabasics.component';

describe('DsabasicsComponent', () => {
  let component: DsabasicsComponent;
  let fixture: ComponentFixture<DsabasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsabasicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsabasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
