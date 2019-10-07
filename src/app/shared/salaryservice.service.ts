import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Salary } from './Models/Salary/salary.model';
import { environment } from '../../environments/environment.prod';



@Injectable()
export class SalaryserviceService {
  rootUrl :string  = environment.rootApiUrl;
  salary: Salary;
  constructor(private http: HttpClient) { }

  AddSalary(salary: Salary) {
    const body = {
      AccountType: salary.AccountType,
      CustomerName: salary.CustomerName,
      Slary: salary.SlaryAmount
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/salary/add', body,{headers : reqHeader});
  }
  getAccountTypes() {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(this.rootUrl + '/api/getAccountType', { headers: reqHeader });
  }

}
