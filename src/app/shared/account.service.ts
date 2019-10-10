import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountType } from './Models/Account_Type/account-type.model';
import { environment } from '../../environments/environment.prod';
import { AccountMaster } from './Models/Account_Master/account.model';




@Injectable()
export class AccountService {
  rootUrl :string  = environment.rootApiUrl;
  account  : AccountMaster;
  accountType  : AccountType;
  
  maxAccountcode:number;
  maxAccountcode1:number;
  
    list: AccountMaster[];
  constructor(private http: HttpClient) { }
  
  accountSaving(account: AccountMaster, AccountTypes:AccountType)
  {
   const body = {
   
     Name: account.Name,
     Reference: account.Reference,
     ChildCode: account.ChildCode,
     HeadCode:account.HeadCode,
     Address: account.Address,
     AccountType: account.AccountType,
     Type: account.Type,
     Country: account.Country,
     State: account.State,
     CuranceyId: account.CuranceyId,
     GoldBlance: account.GoldBlance,
     CashBlance: account.CashBlance,
     Email: account.Email,
     // add new
     House: account.House,
     Block: account.Block,
     Street: account.Street,
     Near: account.Near,
     EmaCityNameil: account.CityName,
    
     PhonoNo : account.PhoneNos,
     AccountTypeId: account.AccountTypeId,
     MobileNo : account.MobileNos,
     AccountTypes : AccountTypes,
     
  }
   
   var reqHeader = new HttpHeaders({'No-Auth':'True'});
   return this.http.post(this.rootUrl + '/api/account/add', body,{headers : reqHeader});
 }
 accoutType(accountType :string)
 {
  // const body = {

  // }
  var reqHeader = new HttpHeaders({'No-Auth':'True'});
  return this.http.post(this.rootUrl + '/api/accountType/add?accountype1='+ accountType,{headers : reqHeader});
 }

// 7 -11  
// 
 getAllAccounts()
  {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/GetAllAccount', { headers: reqHeader }).toPromise()
  .then(res =>this.list=res as AccountMaster[]);
}

getAccount() {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/getAccoundCode', { headers: reqHeader }).toPromise()
  .then(res =>this.maxAccountcode= res as number);
}
getAccountType() {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/getAccountType', { headers: reqHeader });
}
getCurency() {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/getCurrency', { headers: reqHeader });
}
getCountries() {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/countrieslist', { headers: reqHeader });
}

getCity(id :number)
 {
  var reqHeader = new HttpHeaders({'No-Auth':'True'});
  return this.http.get(this.rootUrl + '/api/citylist?id='+ id,{headers : reqHeader});
 }
 getSaleManList(id : string) {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/getsaleman?id='+ id, { headers: reqHeader });
}
}
