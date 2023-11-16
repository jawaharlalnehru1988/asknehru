import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrickyjsComponent } from './trickyjs.component';

describe('TrickyjsComponent', () => {
  let component: TrickyjsComponent;
  let fixture: ComponentFixture<TrickyjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrickyjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrickyjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
