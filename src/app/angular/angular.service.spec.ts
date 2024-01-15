import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AngularService } from './angular.service';

describe('AngularService', () => {
  let service: AngularService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularService],
      imports: [HttpClientTestingModule],
    });

    // Inject the service and the testing controller for HTTP requests
    service = TestBed.inject(AngularService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Ensure that there are no outstanding HTTP requests
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve Angular courses', () => {
    // Define mock data
    const mockData = [{ id: 1, name: 'Angular Basics' }, { id: 2, name: 'Advanced Angular' }];

    // Make an HTTP request
    service.getAngular().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    // Expect a request to the specified URL with a GET method
    const req = httpMock.expectOne('https://jawaharlalnehru1988.github.io/bookapi/angular.json');
    expect(req.request.method).toBe('GET');

    // Respond with mock data
    req.flush(mockData);
  });

  it('should retrieve AG courses', () => {
    // Define mock data
    const mockData = [{ id: 1, name: 'AG Basics' }, { id: 2, name: 'Advanced AG' }];

    // Make an HTTP request
    service.getAgcourse().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    // Expect a request to the specified URL with a GET method
    const req = httpMock.expectOne('https://jawaharlalnehru1988.github.io/bookapi/course.json');
    expect(req.request.method).toBe('GET');

    // Respond with mock data
    req.flush(mockData);
  });
});
