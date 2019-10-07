import { Item } from "../Item/item.model";

export class SubItem
{
    SubItemId: number;
    ItemId: string;
    SubItemName: string;
    Abrivation: string;
    CreatedOn: Date | string | null;
    Item:string;
    Items:Item;

}