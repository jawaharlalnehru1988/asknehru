import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssdialogComponent } from './cssdialog.component';

describe('CssdialogComponent', () => {
  let component: CssdialogComponent;
  let fixture: ComponentFixture<CssdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
