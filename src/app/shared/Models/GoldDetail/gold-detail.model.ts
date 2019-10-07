import { CurrencyType } from '../Master_Form/currency-master.model';
import { Bank } from '../Bank/Bank.model';

export class GoldDetail
{
     //For Gold 
    GoldDetailId: number;
    PurchaseNo: number;
    SaleNo: number;
    Weight: number; //18,4
    Pureweight: number; //18,4
    Kaat_Point: number; //18,4
    Karat: number; //18,4
    CurrencyTypes :CurrencyType   ;
   
    //For Currency
    Net :number   ;
    CurrencyRate:number;
    
    Amount:number;
    GoldRate:number
    Remarks:string;
    //For Cheque
    ChequeNumber:string;
    ChequeDate:Date;
    // BankName:string;
    Banks:Bank;
    // AcBankAccountHolders:BankAccountHolder
    AccountNo:string;    

}
