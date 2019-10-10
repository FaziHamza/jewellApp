import { CurrencyType } from '../Master_Form/Currency-type.model';

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
    CurrencyTypes :CurrencyType  ;
    Net:number;
    Amount:number;
    CurrencyRate:number;
    Remarks:string;
    //For Currency
    
}
