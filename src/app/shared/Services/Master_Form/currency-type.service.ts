import { Injectable } from '@angular/core';
import { CurrencyType } from '../../Models/Master_Form/currency-master.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment, Controllers } from '../../../../environments/environment.prod';

@Injectable()
export class CurrencyTypeService {
  
  rootUrl :string  = environment.rootApiUrl;
  currencyType: CurrencyType;
  currencyTypeList: CurrencyType[];
  constructor(private http: HttpClient) { }

  addcurrency(currencyType: CurrencyType) {
    const body = {
      Code: currencyType.Code,
      Description: currencyType.Description,
      CurrencyId:currencyType.CurrencyId,
      Type:currencyType.Type,
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + Controllers.CurrencyType+'saveCurrencyType', body,{headers : reqHeader});
  }

  async getcurrency()
  {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  const res = await this.http.get(this.rootUrl + Controllers.CurrencyType+ 'getCurrencyType', { headers: reqHeader })
      .toPromise();
    return this.currencyTypeList = (res as CurrencyType[]);
}
getcurrencyList() {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + Controllers.CurrencyType+ 'getCurrencyType', { headers: reqHeader });
}

delete(id:number) {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + Controllers.CurrencyType + 'delete?id='+ id, { headers: reqHeader });
}
}
