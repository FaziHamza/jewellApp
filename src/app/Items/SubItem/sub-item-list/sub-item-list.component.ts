import { Component, OnInit } from '@angular/core';
import { SubItemService } from '../../../shared/Services/SubItem/sub-item.service';
import { ToastrService } from 'ngx-toastr';
import { SubItem } from '../../../shared/Models/SubItem/sub-item.model';

@Component({
  selector: 'app-sub-item-list',
  templateUrl: './sub-item-list.component.html',
  styleUrls: ['./sub-item-list.component.css']
})
export class SubItemListComponent implements OnInit {
  constructor(public subItemService :SubItemService,public toastr: ToastrService){ }

  ngOnInit() {
    this.subItemService.GetSubitem();
  }

  edit(subItemobj: SubItem) {

    this.subItemService.subItem = Object.assign({}, subItemobj);
  }
  delete(id:number){

    if(confirm('Are your sure you delete this record.?')){
      this.subItemService.delete(id)
    .subscribe((data: any) => {
      if (data =="Succfull") {
       // this.resetForm(form);
     
        this.toastr.success('Account  Successfully Save', 'Delete', {
          timeOut: 3000
        });
        //update list
        this.subItemService.GetSubitem();
      }});
    }}
}
