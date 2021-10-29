import { TestBed } from '@angular/core/testing';

import { PayModeService } from './pay-mode.service';

describe('PayModeService', () => {
  let service: PayModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
