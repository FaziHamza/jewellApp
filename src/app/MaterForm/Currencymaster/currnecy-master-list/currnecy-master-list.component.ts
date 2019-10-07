import { Component, OnInit } from '@angular/core';
import { CurrencyTypeService } from '../../../shared/Services/Master_Form/Currency-type.service';
import { CurrencyType } from '../../../shared/Models/Master_Form/currency-master.model';
import { ToastrService } from 'ngx-toastr';
import { RateMasterService } from 'src/app/shared/Services/Master_Form/rate-master.service';

@Component({
  selector: 'CurrnecymasterTable',
  templateUrl: './currnecy-master-list.component.html',
  styleUrls: ['./currnecy-master-list.component.css']
})
export class CurrnecyMasterListComponent implements OnInit {

  constructor(public currencyTypeService :CurrencyTypeService ,public rateMasterService :RateMasterService
  ,public toastr: ToastrService ) { }

  ngOnInit() {
    this.currencyTypeService.getcurrency();
  }
  editForm(currencyTypeObj: CurrencyType) {

    this.currencyTypeService.currencyType = Object.assign({}, currencyTypeObj);
  }
  delete(id:number){
    if(confirm('Are your sure you delete this record.?')){
      this.currencyTypeService.delete(id)
    .subscribe((data: any) => {
      if (data =="Succfull") {
       // this.resetForm(form);
     
        this.toastr.success('Account  Successfully Save', 'Delete', {
          timeOut: 3000
        });
        //update list
        this.currencyTypeService.getcurrency();
      }});
    }}
}
