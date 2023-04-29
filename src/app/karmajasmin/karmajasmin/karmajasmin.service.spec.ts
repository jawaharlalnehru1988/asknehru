import { TestBed } from '@angular/core/testing';

import { KarmajasminService } from './karmajasmin.service';

describe('KarmajasminService', () => {
  let service: KarmajasminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KarmajasminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
