import { Bank } from '../Bank/Bank.model';
export class BankAccountHolder
{
    AccountHolderId: number;
    BankId: number;
    Bank: Bank;
    AccountHolderNo: string;
    AccountHolderName: string;
    CreatedOn: Date | string | null;
}