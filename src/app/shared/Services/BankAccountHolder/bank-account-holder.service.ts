import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment, Controllers } from 'src/environments/environment.prod';
import { BankAccountHolder } from '../../Models/BankAccountHolder/BankAccountHolder.mdoel';

@Injectable({
  providedIn: 'root'
})
export class BankAccountHolderService {
  rootUrl :string  = environment.rootApiUrl;
  bankAccountHolder :BankAccountHolder[];
  constructor(private http: HttpClient){}
  getBankAccountHolder(id :number){
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(this.rootUrl + Controllers.BankAccountHolders+'getBankAccountHolder?id='+ id, { headers: reqHeader })
  }
}
