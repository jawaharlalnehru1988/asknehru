import { TestBed } from '@angular/core/testing';

import { CssService } from './css.service';
import { HttpClientModule } from '@angular/common/http';

describe('CssService', () => {
  let service: CssService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
