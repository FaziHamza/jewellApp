import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerCategoryMaster } from '../../Models/Master_Form/customer-category-master.model';
import { environment } from '../../../../environments/environment.prod';

@Injectable()
export class CustomerCategoryMasterService {
  rootUrl :string  = environment.rootApiUrl;
  currencymaster: CustomerCategoryMaster;
  list: CustomerCategoryMaster[];
  constructor(private http: HttpClient) { }

  AddcustomerCategoryMaster(customerCategoryMaster: CustomerCategoryMaster) {
    const body = {
      Description: customerCategoryMaster.Description,
      Status: customerCategoryMaster.Status,
      CustomerCategoryMasterId: customerCategoryMaster.CustomerCategoryMasterId
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/CustomerCategoryMaster/add', body,{headers : reqHeader});
  }

  GetCustomerCategoryMasters()
  {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/GetCustomerCategoryMasters', { headers: reqHeader }).toPromise()
  .then(res =>this.list=res as CustomerCategoryMaster[]);
}
delete(id:number) {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/CustomerCategoryMaster/delete?id='+ id, { headers: reqHeader });
}
}
