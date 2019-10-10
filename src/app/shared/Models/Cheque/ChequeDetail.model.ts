import { BankAccountHolder } from '../BankAccountHolder/BankAccountHolder.mdoel';
import { Bank } from '../Bank/Bank.model';

export class ChequeDetail
{
    Net :number   ;
    CurrencyRate:number;
    Amount:number;
    GoldRate:number
    Remarks:string;
    //For Cheque
    ChequeNumber:string;
    ChequeDate:Date;
    //BankName:string;
    Banks:Bank;
    BankAccountHolders:BankAccountHolder
    AccountNo:string;
}