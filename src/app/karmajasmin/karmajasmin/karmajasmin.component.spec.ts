import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarmajasminComponent } from './karmajasmin.component';
import { HttpClientModule } from '@angular/common/http';

describe('KarmajasminComponent', () => {
  let component: KarmajasminComponent;
  let fixture: ComponentFixture<KarmajasminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarmajasminComponent ],
      imports: [HttpClientModule], // Include HttpClientModule here
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarmajasminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
