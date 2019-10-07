import { TestBed, inject } from '@angular/core/testing';

import { GoldRateService } from './gold-rate.service';

describe('GoldRateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoldRateService]
    });
  });

  it('should be created', inject([GoldRateService], (service: GoldRateService) => {
    expect(service).toBeTruthy();
  }));
});
