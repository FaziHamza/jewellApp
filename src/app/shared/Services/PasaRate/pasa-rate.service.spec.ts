import { TestBed, inject } from '@angular/core/testing';

import { PasaRateService } from './pasa-rate.service';

describe('PasaRateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasaRateService]
    });
  });

  it('should be created', inject([PasaRateService], (service: PasaRateService) => {
    expect(service).toBeTruthy();
  }));
});
