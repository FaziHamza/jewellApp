import { Injectable } from '@angular/core';
import { RattiMaster } from '../../Models/RattiMaster/ratti-master.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';

@Injectable()
export class RattiMasterService {
  rattiMaster:RattiMaster;
  list: RattiMaster[];
  rootUrl :string  = environment.rootApiUrl;
  constructor(private http: HttpClient) { }
  AddRattiMaster(rattiMaster: RattiMaster) {
    const body = {
      RattiMasterId :rattiMaster.RattiMasterId,
      Purity: rattiMaster.Purity,
      Description: rattiMaster.Description,

  
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/RattiMaster/add', body,{headers : reqHeader});
  }
  getRatti()
  {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/GetRattiMaster', { headers: reqHeader }).toPromise()
  .then(res =>this.list=res as RattiMaster[]);
}
getRattiList() {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/GetRattiMaster', { headers: reqHeader });
}
delete(id:number) {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/Ratti/delete?id='+ id, { headers: reqHeader });
}
}
