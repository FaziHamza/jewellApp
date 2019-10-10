import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CurrencyType } from '../../../shared/Models/Master_Form/Currency-type.model';
import { ToastrService } from 'ngx-toastr';
import { CurrencyTypeService } from '../../../shared/Services/Master_Form/Currency-type.service';


@Component({
  selector: 'app-currnecy-master',
  templateUrl: './currnecy-master.component.html',
  styleUrls: ['./currnecy-master.component.css']
})
export class CurrnecyMasterComponent implements OnInit {
  // currencymaster: CurrencyMaster;
  constructor(public currencyTypeService :CurrencyTypeService ,public toastr: ToastrService) { }
  update=0;
  ngOnInit() {
    this.resetForm()
  }
  resetForm(form? : NgForm): any {
    if(form!=null)
      form.reset();
      this.currencyTypeService.currencyType ={
        Code :'',
        Description :'',
        CurrencyId :0,
        Type:'',
      }
    }
    onSubmit(form: NgForm) {
  this.update = form.value.CurrencyMasterId;
      this.currencyTypeService.addcurrency(form.value)
        .subscribe((data: any) => {
          if (data =="Succfull") {
           // this.resetForm(form);
           if(  this.update ==0 ){
            this.toastr.success('Successfully Save', 'Successfully', {
              timeOut: 3000
            });
          }else{
            this.toastr.warning('Successfully Updated', 'Updated', {
              timeOut: 3000
            });

          }
          this.currencyTypeService.getcurrency(); 
        }
          else
            this.toastr.error(data.Errors[0]);
        });
        this.resetForm(form);
            // this.toastr.success('Account  successful save.');
     //  this.accountService.getAllAccounts();
       }
}
