import { TestBed } from '@angular/core/testing';

import { ApplicationInterceptorService } from './application-interceptor.service';

describe('ApplicationInterceptorService', () => {
  let service: ApplicationInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
