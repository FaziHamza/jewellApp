
import { Item } from '../Item/item.model';
import { Image } from '../Image/Image.model';
import { AccountMaster } from '../Account_Master/account.model';

export class Stock
{
    StockId: number;
    TagNo: string;
    BarCode: string;
    ItemId: number;
    Items: Item;
    NetWeight: number;
    WastePerGm: number;
    WastePercent: number;
    TotalWeight: number;
    ItemSize: string;
    Qty: number;
    Pieces: number;
    Karat: string;
    Description: string;
    StockDate: Date | string;
    WorkerId: number;
    AccountMasters: AccountMaster;
    LakerPerGm: number;
    TotalLaker: number;
    RatePerGm: number;
    MakingPerGm: number;
    MakingPerTola: number;
    TotalMaking: number;
    TotalPrice: number;
    //silver
    RateA: number;
    PriceA: number;
    RateD: number;
    PriceD: number;
    SilverSalePrice: number;
    //end silver
    DesignId: number;

    //Design: Design;
    ItemType: string;
    MakingType: string;
    Status: string;
    OrderNo: number;
    OItemId: string;
    OtherCharges: number;
    SaleDate: Date | string;
    DelDate: Date | string;
    DamDate: Date | string;
    IndexNo: number;
    PStatus: number;
    UserId: number;
    lineItems: Stock[];

   // StonesDetails: StonesDetail[];
   Images: Image[];

}

