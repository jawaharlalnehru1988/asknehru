import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDetailsComponent } from './js-details.component';

describe('JsDetailsComponent', () => {
  let component: JsDetailsComponent;
  let fixture: ComponentFixture<JsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
