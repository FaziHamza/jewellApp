import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})

export class AccountMasterService {
  rootUrl :string  = environment.rootApiUrl;
  constructor(private http: HttpClient) { }
  getAccountList() {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(this.rootUrl + '/api/AccountList', { headers: reqHeader });
  }
}
