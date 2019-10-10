import { PurcahseDetail } from "./purchase-details.model";
import { GoldDetail } from '../Models/GoldDetail/gold-detail.model';
import { Item } from '../Models/Item/item.model';
import { PurchaseStoneDetail } from '../Models/PurchaseStoneDetail/PurchaseStoneDetail.model';
import { AccountMaster } from '../Models/Account_Master/account.model';


export class Purchase
    {
        PurchaseId: number;
        PurchaseNo: number;
        BillNo: string;
        PurchaseDate: Date | string;
        AccountNo: string;
        RateCode: string;
        GoldRate: number;
        
        RefrenceNo: string;
        Description: string;
     
        TotalMaking: number;
       
        Status: string;
        TotalPureWeight:number;
       
        GoldPayment: number;
        CashPayment: number;
        CurrencyCode: string;

        TypeCode: string;
        CreatedOn: Date | string | null;
        TotalQty :number;
        TotalWeight:number;
        TotalPweight:number;
        GoldPrice:number;
        TotalPrice:number;
        ConvFact:number;
        Karat :string;

    PurcahseDetails: PurcahseDetail[];
    PurcahseDetail: PurcahseDetail;

    StoneDetails: PurchaseStoneDetail[];



    stoneId :number;
    SType :string;
    SName :string;
    Squantity :number;
    Sweight :number;
    SPrice :number;
    SRate :number;
    AccountMasters:AccountMaster;
    GoldDetails:GoldDetail[];
    Items :Item;
    }