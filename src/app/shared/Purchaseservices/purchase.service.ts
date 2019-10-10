import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CurrencyType } from '../Models/Master_Form/Currency-type.model';
import { Purchase } from './purchase.model';
import { PurcahseDetail } from './purchase-details.model';
import { environment, Controllers } from '../../../environments/environment.prod';
import { GoldDetail } from '../Models/GoldDetail/gold-detail.model';
import { AccountMaster } from '../Models/Account_Master/account.model';
import { PurchaseStoneDetail } from '../Models/PurchaseStoneDetail/PurchaseStoneDetail.model';
import { CurrencyDetail } from '../Models/CurrencyDetail/currency-detail.model';

// import { AccountMaster } from '../add-account.model';


@Injectable()
export class PurchaseService {
  rootUrl :string  = environment.rootApiUrl;
  list: CurrencyType[];
  purchase: Purchase;


  constructor(private http: HttpClient) { }
  addPurchase(purchase: Purchase , purchasedetail: PurcahseDetail[],    StoneDetails: PurchaseStoneDetail[] , AccountMasters:AccountMaster , GoldDetails:GoldDetail[]) {
    const body = {
      PurchaseDate: purchase.PurchaseDate,
      AccountNo : purchase.AccountNo,
      CurrencyCode :purchase.CurrencyCode,
      BillNo: purchase.BillNo,
      RateCode: purchase.RateCode,
      Description:purchase.Description,
      TotalQty:purchase.TotalQty,
      TotalWeight:purchase.TotalWeight,
      TotalPureWeight:purchase.TotalPureWeight,
      GoldPrice:purchase.GoldPrice,
      TotalMaking:purchase.TotalMaking,
      TotalPrice:purchase.TotalPrice,
      PurcahseDetails :purchasedetail ,
      StoneDetail  : StoneDetails,
      AccountMasters:AccountMasters,
      GoldDetails:GoldDetails



    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl +Controllers.Purchase +'savePurchase', body,{headers : reqHeader});
  }
  
// comes from AccountMasterController

 // comes from PurchaseController
  getRateFix(id : string) {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(this.rootUrl + '/api/GetRateFix?id='+ id, { headers: reqHeader });
  }
  // getStandardPurity(id : string) {
  //   var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  //   return this.http.get(this.rootUrl + '/api/GetStandardPurity?id='+ id, { headers: reqHeader });
  // }
}

