import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JscoreComponent } from './jscore.component';

describe('JscoreComponent', () => {
  let component: JscoreComponent;
  let fixture: ComponentFixture<JscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JscoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
