import { TestBed } from '@angular/core/testing';

import { AccountMasterService } from './account-master.service';

describe('AccountMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountMasterService = TestBed.get(AccountMasterService);
    expect(service).toBeTruthy();
  });
});
