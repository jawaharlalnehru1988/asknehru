import { TestBed } from '@angular/core/testing';

import { DsaService } from './dsa.service';
import { HttpClientModule } from '@angular/common/http';
import { DsaComponent } from './dsa.component';

describe('DsaService', () => {
  let service: DsaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DsaComponent],
    imports: [HttpClientModule], // Include HttpClientTestingModule here
    providers: [DsaService], 
    });
    service = TestBed.inject(DsaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
