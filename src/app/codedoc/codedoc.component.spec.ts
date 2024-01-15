import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodedocComponent } from './codedoc.component';
import { HttpClientModule } from '@angular/common/http';

describe('CodedocComponent', () => {
  let component: CodedocComponent;
  let fixture: ComponentFixture<CodedocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodedocComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be false in the beginning', ()=>{
    expect(component.courseDetails).toBeUndefined();
  });
  it('should be false at initializing', ()=>{
    expect(component.isContentLoading).toBeTrue();
  })
});
