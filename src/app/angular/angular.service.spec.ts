import { TestBed } from '@angular/core/testing';

import { AngularService } from './angular.service';
import { HttpClientModule } from '@angular/common/http';

describe('AngularService', () => {
  let service: AngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularService],
      imports: [HttpClientModule], 
    });
    service = TestBed.inject(AngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
