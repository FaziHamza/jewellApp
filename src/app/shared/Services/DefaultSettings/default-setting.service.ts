import { Injectable } from '@angular/core';
import { SubItem } from '../../Models/SubItem/sub-item.model';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';
import { Item } from '../../Models/Item/item.model';
import { ItemSubitemVm } from '../../viewmodel/item-subitem-vm.model';
import { DefaultSetting } from '../../Models/DefaultSetting/DefaultSetting';

@Injectable()
export class DefaultSettingService{
  rootUrl :string  = environment.rootApiUrl;
  public CountryName;
  public readonly: boolean;
  public Pakistan: boolean;

  defaultSetting :any;
  Origin:string;
  constructor(private http: HttpClient) { 
    let defaultSetting = new DefaultSetting();
    this.defaultSetting= defaultSetting;
  }
  getDefaultSetting()
  {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/GetDefaultsetting', { headers: reqHeader }).toPromise()
  .then(res =>this.defaultSetting=res as DefaultSetting);
}
getDefaultSettingSubscrption() {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/GetDefaultsetting', { headers: reqHeader });
}
}
