import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MatServiceService } from './mat-service.service';

describe('MatServiceService', () => {
  let service: MatServiceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MatServiceService]
    });

    service = TestBed.inject(MatServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // Ensure that there are no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get country code', waitForAsync(() => {
    const mockData = [{ /* your mock data here */ }];

    service.getCountryCode().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpTestingController.expectOne('https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/by-code.json');
    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  }));

  it('should get mobile code', waitForAsync(() => {
    const mockData = [{ /* your mock data here */ }];

    service.getMobileCode().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpTestingController.expectOne('https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json');
    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  }));

  it('should get country full details', waitForAsync(() => {
    const mockData = [{ /* your mock data here */ }];

    service.getCountryfullDetails().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpTestingController.expectOne('https://jawaharlalnehru1988.github.io/bookapi/country.json');
    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  }));
});
