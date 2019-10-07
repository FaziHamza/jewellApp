import { AccountType } from "../Models/Account_Type/account-type.model";

export class AccountTypeHeadAccountVm {
    private AccountType :AccountType;
    private HeadAccount :HeadAccount;
}

export class HeadAccount{
    HeadAccountId: number;
    HeadCode: number;
    HeadName: string;
}
