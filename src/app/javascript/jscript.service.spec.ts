import { TestBed } from '@angular/core/testing';

import { JscriptService } from './jscript.service';
import { HttpClientModule } from '@angular/common/http';

describe('JscriptService', () => {
  let service: JscriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JscriptService],
      imports: [HttpClientModule],
    });
    service = TestBed.inject(JscriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
