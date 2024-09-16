import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBlogsComponent } from './angular-blogs.component';

describe('AngularBlogsComponent', () => {
  let component: AngularBlogsComponent;
  let fixture: ComponentFixture<AngularBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularBlogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
