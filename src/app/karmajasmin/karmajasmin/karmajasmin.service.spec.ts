import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { KarmajasminService } from './karmajasmin.service';

describe('KarmajasminService', () => {
  let service: KarmajasminService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [KarmajasminService]
    });

    service = TestBed.inject(KarmajasminService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // Ensure that there are no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request to the API and return data', waitForAsync(() => {
    const mockData = { /* Your mock data here */ };

    service.getjasminData().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpTestingController.expectOne('https://jawaharlalnehru1988.github.io/bookapi/karmajasmin.json');
    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  }));

  // Add more test cases as needed for error handling, different responses, etc.

});
