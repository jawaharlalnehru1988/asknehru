import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    declarations: [],
    imports: [],
    providers: [ApiService, provideHttpClient(withInterceptorsFromDi())]
});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
