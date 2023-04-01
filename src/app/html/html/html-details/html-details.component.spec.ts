import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlDetailsComponent } from './html-details.component';

describe('HtmlDetailsComponent', () => {
  let component: HtmlDetailsComponent;
  let fixture: ComponentFixture<HtmlDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
