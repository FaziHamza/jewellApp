import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KaratMaster } from '../../Models/Master_Form/karat-master.model';
import { environment } from '../../../../environments/environment.prod';

@Injectable()
export class KaratMasterService {
 
  rootUrl :string  = environment.rootApiUrl;
  karatmaster: KaratMaster;
  list: KaratMaster[];
  constructor(private http: HttpClient) { }
  AddKarat(karatmaster: KaratMaster) {
    const body = {
      KaratMasterId :karatmaster.KaratMasterId,
      KaratCode: karatmaster.KaratCode,
      Description: karatmaster.Description,
      StandredPurity: karatmaster.StandredPurity

    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/karatMaster/add', body,{headers : reqHeader});
  }

  getkarat()
  {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/GetKaratMasters', { headers: reqHeader }).toPromise()
  .then(res =>this.list=res as KaratMaster[]);
}
getKaratList() {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/getKarat', { headers: reqHeader });
}
delete(id:number) {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/karata/delete?id='+ id, { headers: reqHeader });
}
}
