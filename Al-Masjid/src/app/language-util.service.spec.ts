import { TestBed } from '@angular/core/testing';

import { LanguageUtilService } from './language-util.service';

describe('LanguageUtilService', () => {
  let service: LanguageUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
