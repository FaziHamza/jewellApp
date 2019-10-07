import { Component, OnInit } from '@angular/core';
import { CustomerCategoryMasterService } from '../../../shared/Services/Master_Form/customer-category-master.service';
import { CustomerCategoryMaster } from '../../../shared/Models/Master_Form/customer-category-master.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cutcatmastre-list',
  templateUrl: './cutcatmastre-list.component.html',
  styleUrls: ['./cutcatmastre-list.component.css']
})
export class CutcatmastreListComponent implements OnInit {

  constructor(public cutcategorymasterservice : CustomerCategoryMasterService,public toastr: ToastrService ) { }

  ngOnInit() {
    this.cutcategorymasterservice.GetCustomerCategoryMasters();
  }
  edit(obj: CustomerCategoryMaster ) {

    this.cutcategorymasterservice.currencymaster = Object.assign({}, obj);
  }
  delete(id:number){
    if(confirm('Are your sure you delete this record.?')){
      this.cutcategorymasterservice.delete(id)
    .subscribe((data: any) => {
      if (data =="Succfull") {
       // this.resetForm(form);
        this.toastr.success('Account  Successfully Save', 'Delete', {
          timeOut: 3000
        });
        //update list
        this.cutcategorymasterservice.GetCustomerCategoryMasters();
      }});
    }}


}
