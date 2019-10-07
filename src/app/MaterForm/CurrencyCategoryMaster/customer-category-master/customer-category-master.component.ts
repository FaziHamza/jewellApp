import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { CustomerCategoryMaster } from '../../../shared/Models/Master_Form/customer-category-master.model';
import { CustomerCategoryMasterService } from '../../../shared/Services/Master_Form/customer-category-master.service';

@Component({
  selector: 'app-customer-category-master',
  templateUrl: './customer-category-master.component.html',
  styleUrls: ['./customer-category-master.component.css']
})
export class CustomerCategoryMasterComponent implements OnInit {
  
  constructor( public customerCategoryMasterservice : CustomerCategoryMasterService,public toastr: ToastrService) { }
  ngOnInit() {
    this.resetForm();
  }
  update=0;
  resetForm(form? : NgForm): any {
    if(form!=null)
      form.reset();
      this.customerCategoryMasterservice.currencymaster ={
        Status  :'',
        Description :'',
        CustomerCategoryMasterId:0
      }
    }
    OnSubmit(form: NgForm) {
  
      this.customerCategoryMasterservice.AddcustomerCategoryMaster(form.value)
        .subscribe((data: any) => {
          if (data =="Succfull") {
           // this.resetForm(form);
           if(  this.update ==0 ){
            this.toastr.success('Account  Successfully Save', 'Successfully', {
              timeOut: 3000
            });
          }else{
            this.toastr.warning('Account  Successfully Updated', 'Updated', {
              timeOut: 3000
            });
          }
     this.customerCategoryMasterservice.GetCustomerCategoryMasters(); 

        }
          else
            this.toastr.error(data.Errors[0]);
        });
        this.resetForm(form);
            // this.toastr.success('Account  successful save.');
     //  this.accountService.getAllAccounts();
       }
}
