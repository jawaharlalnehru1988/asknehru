import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridComponent } from './aggrid.component';
import { HttpClientModule } from '@angular/common/http';

describe('AggridComponent', () => {
  let component: AggridComponent;
  let fixture: ComponentFixture<AggridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggridComponent ],
      imports: [HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
