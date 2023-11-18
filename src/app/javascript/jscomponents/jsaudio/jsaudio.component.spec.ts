import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsaudioComponent } from './jsaudio.component';

describe('JsaudioComponent', () => {
  let component: JsaudioComponent;
  let fixture: ComponentFixture<JsaudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsaudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsaudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
