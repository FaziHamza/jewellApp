import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';


@Injectable()
export class StoneService {

     rootUrl :string  = environment.rootApiUrl;
  constructor(private http: HttpClient) {
    // console.log(environment.rootApiUrl)
   }
   getStoneList() {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(this.rootUrl + '/api/GetStoneList', { headers: reqHeader });
  }
}
