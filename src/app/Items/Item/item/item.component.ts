import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
// import { from } from 'rxjs/observable/from';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ItemService } from '../../../shared/Services/Items/item.service';
import { Item } from '../../../shared/Models/Item/item.model';
import { SubItemService } from '../../../shared/Services/SubItem/sub-item.service';
// import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


items : Item;

  constructor(private itemservice : ItemService , 
    public toastr: ToastrService ,
    public router : Router,
    public dialog: MatDialog,
    public subItemService :SubItemService,
    ) { }

  ngOnInit() {
    this.resetForm();
    //  this.savaItems();
    this.subItemService.itemList().subscribe(res => {
      this.subItemService.item = res as Item[];
    });
    // $(document).ready(function(){

    // });
  }
  savaItems(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ItemComponent,dialogConfig);
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.items = 
    {
      ItemId:0,
      Abrivation : '',
      ItemName : '',
   
    }
   
  }
  onSubmit(form: NgForm) {
  
    this.itemservice.addItem(form.value)
      .subscribe((data: any) => {
        if (data == 'Succfull') {
         this.resetForm(form);
          this.toastr.success('Items  successful save.');
          // this.router.navigate(['/items']);
          this.itemservice.getItemList();
      this.loadvalue();
        }
        else{
          this.toastr.error("Some Error Occurs..!");
        }
      });

     }
      // insrtItem(form:NgForm){
      //   this.itemservice.addItem(from.value).subscribe(res=>{
      //       this.resetForm();
      //   })
      // }

      onClose() {
       this.router.navigate(['/account']);
        // this.dialogRef.close();
      }
      loadvalue(){
        this.subItemService.itemList().subscribe(res => {
          this.subItemService.item = res as Item[];
        });
      }
}
