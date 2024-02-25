import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmldialogComponent } from './htmldialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('HtmldialogComponent', () => {
  let component: HtmldialogComponent;
  let fixture: ComponentFixture<HtmldialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
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
