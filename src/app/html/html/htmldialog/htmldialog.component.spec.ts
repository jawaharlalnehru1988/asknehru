import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmldialogComponent } from './htmldialog.component';

describe('HtmldialogComponent', () => {
  let component: HtmldialogComponent;
  let fixture: ComponentFixture<HtmldialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmldialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmldialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
