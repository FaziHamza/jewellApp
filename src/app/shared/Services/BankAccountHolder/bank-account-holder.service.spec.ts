import { TestBed } from '@angular/core/testing';

import { BankAccountHolderService } from './bank-account-holder.service';

describe('BankAccountHolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankAccountHolderService = TestBed.get(BankAccountHolderService);
    expect(service).toBeTruthy();
  });
});
