import { TestBed } from '@angular/core/testing';

import { JscriptService } from './jscript.service';

describe('JscriptService', () => {
  let service: JscriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JscriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
