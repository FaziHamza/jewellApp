import { TestBed, inject } from '@angular/core/testing';

import { RattiMasterService } from './ratti-master.service';

describe('RattiMasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RattiMasterService]
    });
  });

  it('should be created', inject([RattiMasterService], (service: RattiMasterService) => {
    expect(service).toBeTruthy();
  }));
});
