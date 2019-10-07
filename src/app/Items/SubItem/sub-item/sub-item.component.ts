import { Component, OnInit } from '@angular/core';
import { SubItemService } from '../../../shared/Services/SubItem/sub-item.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Item } from '../../../shared/Models/Item/item.model';
// import { from } from 'rxjs/observable/from';

@Component({
  selector: 'app-sub-item',
  templateUrl: './sub-item.component.html',
  styleUrls: ['./sub-item.component.css']
})
export class SubItemComponent implements OnInit {

  constructor(public subItemService :SubItemService,public toastr: ToastrService){ }
  update =0;
  ngOnInit() {
    this.resetForm();
    this.subItemService.itemList().subscribe(res => {
      this.subItemService.item = res as Item[];
    });
  }


  resetForm(form? : NgForm): any {
    if(form!=null)
      form.reset();
      this.subItemService.subItem ={
        SubItemId:0,
        ItemId :'',
        Abrivation :'',
        SubItemName:'',
       CreatedOn:null,
       Items:null,
       Item:null
      }
    }
    OnSubmit(form: NgForm) {
      this.update = form.value.SubItemId;

      this.subItemService.subItem.Items =JSON.parse(this.subItemService.subItem.ItemId);
      alert(JSON.stringify(this.subItemService.subItem.Items));
      this.subItemService.AddSubItem(form.value,this.subItemService.subItem.Items)
        .subscribe((data: any) => {
          if (data =="Succfull") {
           // this.resetForm(form);
            this.toastr.success('Account  Successfully Save', 'Successfully', {
              timeOut: 3000
            });
     this.subItemService.GetSubitem(); 
          }
          else
            this.toastr.error(data.Errors[0]);
        });
        this.resetForm(form);

       }
    
}
