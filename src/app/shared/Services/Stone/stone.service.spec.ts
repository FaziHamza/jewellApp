import { TestBed, inject } from '@angular/core/testing';

import { StoneService } from './stone.service';

describe('StoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoneService]
    });
  });

  it('should be created', inject([StoneService], (service: StoneService) => {
    expect(service).toBeTruthy();
  }));
});
