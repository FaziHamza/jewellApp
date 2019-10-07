import { TestBed, inject } from '@angular/core/testing';

import { PurcahseDetailserviceService } from './purcahse-detailservice.service';

describe('PurcahseDetailserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PurcahseDetailserviceService]
    });
  });

  it('should be created', inject([PurcahseDetailserviceService], (service: PurcahseDetailserviceService) => {
    expect(service).toBeTruthy();
  }));
});
