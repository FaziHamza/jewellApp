import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TypeMaster } from '../../Models/Master_Form/type-master.model';
import { environment } from '../../../../environments/environment.prod';

@Injectable()
export class TypeMasterService {

  rootUrl :string  = environment.rootApiUrl;
  typeMaster: TypeMaster;
  list: TypeMaster[];

  constructor(private http: HttpClient) { }

  AddTypeMaster(typeMaster: TypeMaster) {
    const body = {
      TypeCode: typeMaster.TypeCode,
      Description: typeMaster.Description,
      TypeMasterId: typeMaster.TypeMasterId,
      CreatedOn: typeMaster.CreatedOn,
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/typeMaster/add', body,{headers : reqHeader});
  }

  getTypeMaster()
  {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/GetTypeMasters', { headers: reqHeader }).toPromise()
  .then(res =>this.list=res as TypeMaster[]);
}
delete(id:number) {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/Ratemaster/delete?id='+ id, { headers: reqHeader });
}
}
