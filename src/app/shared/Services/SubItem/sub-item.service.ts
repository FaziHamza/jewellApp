import { Injectable } from '@angular/core';
import { SubItem } from '../../Models/SubItem/sub-item.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';
import { Item } from '../../Models/Item/item.model';
import { ItemSubitemVm } from '../../viewmodel/item-subitem-vm.model';


@Injectable()
export class SubItemService {

  rootUrl :string  = environment.rootApiUrl;
  subItem : SubItem;
  item : Item[];
  items : Item;

  listVm :ItemSubitemVm;
  constructor(private http: HttpClient) { }


  itemList() {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(this.rootUrl + '/api/ItemList', { headers: reqHeader });
  }
  AddSubItem(subItem: SubItem ,items:Item) {
    const body = {
      ItemId: subItem.ItemId,
      Abrivation: subItem.Abrivation,
      SubItemName: subItem.SubItemName,
      SubItemId: subItem.SubItemId,
      Items:items

    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/SubItem/add', body,{headers : reqHeader});
  }
  GetSubitem()
  {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/GetSubItem', { headers: reqHeader }).toPromise()
  .then(res =>this.listVm=res as ItemSubitemVm);
}
delete(id:number) {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/Typemaster/delete?id='+ id, { headers: reqHeader });
}
getSubItemListforPurchase() {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/getAllSubItems', { headers: reqHeader });
}
}
