import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsacommonComponent } from './dsacommon.component';

describe('DsacommonComponent', () => {
  let component: DsacommonComponent;
  let fixture: ComponentFixture<DsacommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsacommonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsacommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
