import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxlayoutComponent } from './fxlayout.component';

describe('FxlayoutComponent', () => {
  let component: FxlayoutComponent;
  let fixture: ComponentFixture<FxlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FxlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
