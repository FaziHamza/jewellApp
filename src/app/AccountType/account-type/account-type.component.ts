import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HeadAccount } from '../../shared/Models/HeadAccount/head-account.model';
import { AccountTypeService } from 'src/app/shared/Services/Account/AccountType/account-type.service';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.css']
})
export class AccountTypeComponent implements OnInit {
  headCodeList : any[];
  constructor(public accountTypeService : AccountTypeService,public toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.accountTypeService.headCodeList().subscribe(res => {
      this.headCodeList = res as any[];
      
    });
  }
  headAccount :HeadAccount;
  resetForm(form? : NgForm): any {
    if(form!=null)
      form.reset();
      this.accountTypeService.accountType ={
        HeadCode :0,
        AccountTypeId :0,
        Name:'',
        CreatedOn :null,
        IsActive:true,
        HeadCodes :null,
      }

    }
    onSubmit(form: NgForm) {
   // this.headAccount = this.accountTypeService.accountType.HeadCodes;

      // alert((this.accountTypeService.accountType.HeadCodes));
      this.accountTypeService.addAccountType(form.value, this.headAccount)
        .subscribe((data: any) => {
          if (data =="Succfull") {
           // this.resetForm(form);
            this.toastr.success('Account Type  Successfully Save', 'Successfully', {
              timeOut: 3000
            });
            this.accountTypeService.getAccountByType(); 
          }
          else
            this.toastr.error(data.Errors[0]);
        });
        this.resetForm(form);
            // this.toastr.success('Account  successful save.');
     //  this.accountService.getAllAccounts();
       }

}
