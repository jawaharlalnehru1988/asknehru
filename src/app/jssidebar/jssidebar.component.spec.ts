import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JssidebarComponent } from './jssidebar.component';

describe('JssidebarComponent', () => {
  let component: JssidebarComponent;
  let fixture: ComponentFixture<JssidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JssidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JssidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
