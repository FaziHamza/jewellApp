import { Injectable } from '@angular/core';
// import { ItemsComponent } from '../../items/items.component';
import { Item } from '../../Models/Item/item.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';


@Injectable()
export class ItemService {
  rootUrl :string  = environment.rootApiUrl;
  item : Item;
  list: Item[];
  constructor(private http: HttpClient) { }
  addItem(item: Item) {
    const body = {
      ItemName: item.ItemName,
      Abrivation: item.Abrivation
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/item', body,{headers : reqHeader});
  }
  getItemList()
  {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/getAllItems', { headers: reqHeader })
  .toPromise()
  .then(res =>this.list=res as Item[]);
}
getItemListforPurchase() {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/getAllItems', { headers: reqHeader });
}

}
