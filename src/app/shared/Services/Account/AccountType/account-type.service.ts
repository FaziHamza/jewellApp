import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountType } from '../../../Models/Account_Type/account-type.model';
import { HeadAccount } from '../../../Models/HeadAccount/head-account.model';
import { AccountTypeHeadAccountVm } from '../../../viewmodel/account-type-head-account-vm.model';
import { environment, Controllers } from '../../../../../environments/environment.prod';

@Injectable()
export class AccountTypeService {
 
  rootUrl :string  = environment.rootApiUrl;
  accountType: AccountType
  list: HeadAccount;
  accountByTypeList: AccountTypeHeadAccountVm;
  constructor(private http: HttpClient) { }
  
  addAccountType(accountType: AccountType ,list : HeadAccount ) {
    const body = {
      Name: accountType.Name,
      HeadCode: accountType.HeadCode,
      HeadCodes:list
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + Controllers.AccountType+'saveAccountType', body,{headers : reqHeader});
  }
  headCodeList() {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(this.rootUrl + Controllers.AccountType+'getHeadList', { headers: reqHeader });
  }
  getAccountByType()
  {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + Controllers.AccountType+'getAccounByType', { headers: reqHeader }).toPromise()
  .then(res =>this.accountByTypeList=res as AccountTypeHeadAccountVm
  );
}
  

}
