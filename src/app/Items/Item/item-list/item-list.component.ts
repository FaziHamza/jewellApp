import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../shared/Services/Items/item.service';
import { Item } from '../../../shared/Models/Item/item.model';
import { SubItemService } from '../../../shared/Services/SubItem/sub-item.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  item :Item[];
  constructor(public itemservice :ItemService ,public subItemService :SubItemService) { }

  ngOnInit() {

    this.itemservice.getItemList();
    this.subItemService.itemList().subscribe(res => {
      this.item = res as Item[];
    });
  }

}
