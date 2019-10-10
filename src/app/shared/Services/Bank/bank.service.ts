import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment, Controllers } from 'src/environments/environment.prod';
import { Bank } from '../../Models/Bank/Bank.model';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  rootUrl :string  = environment.rootApiUrl;
  bankList:Bank[]
  constructor(private http: HttpClient){

  }
  getBanks()
  {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + Controllers.Banks+'getBanks', { headers: reqHeader }).toPromise()
  .then(res =>this.bankList=res as Bank[]);
}

}
