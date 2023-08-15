import { TestBed } from '@angular/core/testing';

import { AggridService } from './aggrid.service';
import { HttpClientModule } from '@angular/common/http';
import { AggridComponent } from './aggrid/aggrid.component';

describe('AggridService', () => {
  let service: AggridService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AggridComponent],
      imports: [HttpClientModule], // Include HttpClientModule here
    providers: [AggridService], // Provide your service here
    });
    service = TestBed.inject(AggridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
