import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RateMasterTypeVm } from '../../viewmodel/rate-master-type-vm.model';
import { RateMaster } from '../../Models/Master_Form/rate-master.model';
import { environment } from '../../../../environments/environment.prod';

@Injectable()
export class RateMasterService {

  rootUrl :string  = environment.rootApiUrl;
  rateMaster: RateMaster;
  list: RateMasterTypeVm;
  constructor(private http: HttpClient) { }

  AddRateMaster(rateMaster: RateMaster) {
    const body = {
      Description: rateMaster.Description,
      RateCode: rateMaster.RateCode,
      TypemasterId: rateMaster.TypemasterId,
      Select: rateMaster.Select,
      ConvFact: rateMaster.ConvFact,
      CurrencyRate: rateMaster.CurrencyRate,
      RateMasterId :rateMaster.RateMasterId,
      

    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/RateMaster/add', body,{headers : reqHeader});
  }

  getRateMaster()
  {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/GetRateMasters', { headers: reqHeader }).toPromise()
  .then(res =>this.list=res as RateMasterTypeVm);
}
getratmaster() {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl +  '/api/getratmaster', { headers: reqHeader });
}

typeMasterList() {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/TypemasterList', { headers: reqHeader });
}
delete(id:number) {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/Typemaster/delete?id='+ id, { headers: reqHeader });
}
}
