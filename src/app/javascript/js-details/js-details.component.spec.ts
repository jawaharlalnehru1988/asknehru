import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { JsDetailsComponent } from './js-details.component';
import { JscriptService } from '../jscript.service';
import { HttpClientModule } from '@angular/common/http';

describe('JsDetailsComponent', () => {
  let component: JsDetailsComponent;
  let fixture: ComponentFixture<JsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsDetailsComponent ],
      imports: [HttpClientModule],
      providers: [
        // Add the ActivatedRoute provider here
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => 'js-details', // Replace with any desired parameter value
              },
            },
          },
        },
        JscriptService
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
