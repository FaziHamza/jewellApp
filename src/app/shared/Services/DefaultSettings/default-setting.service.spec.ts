import { TestBed, inject } from '@angular/core/testing';

import { DefaultSettingService } from './default-setting.service';

describe('DefaultSettingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultSettingService]
    });
  });

  it('should be created', inject([DefaultSettingService], (service: DefaultSettingService) => {
    expect(service).toBeTruthy();
  }));
});
