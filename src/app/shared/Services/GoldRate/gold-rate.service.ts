import { Injectable } from '@angular/core';
import { GoldRate, GoldRates } from '../../Models/GoldRate/gold-rate.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment, Controllers } from '../../../../environments/environment.prod';

@Injectable()
export class GoldRateService {
  rootUrl :string  = environment.rootApiUrl;

  goldRates :GoldRate;
  constructor(private http: HttpClient) { }
  addGoldRate(goldRates :GoldRates) {
    const body = {
      GoldRateId: goldRates.GoldRateId,
      K24Tola: goldRates.K24Tola,
      K22Tola: goldRates.K22Tola,
      K21Tola: goldRates.K21Tola,
      K18Tola: goldRates.K18Tola,
      K24: goldRates.K24,
      K22: goldRates.K22,
      K21: goldRates.K21,
      K18: goldRates.K18,
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + + Controllers.GoldRate +'saveGoldRate', body,{headers : reqHeader});
  }

  getGoldRate()
  {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + Controllers.GoldRate +'getGoldRate', { headers: reqHeader }).toPromise()
  .then(res =>this.goldRates=res as GoldRate);
}
getGoldRateSubscribe()
{
var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
return this.http.get(this.rootUrl + Controllers.GoldRate +'getGoldRate', { headers: reqHeader });
}
}
