import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodedocComponent } from './codedoc.component';

describe('CodedocComponent', () => {
  let component: CodedocComponent;
  let fixture: ComponentFixture<CodedocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodedocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
