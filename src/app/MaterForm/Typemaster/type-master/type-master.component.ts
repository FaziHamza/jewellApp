import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TypeMasterService } from '../../../shared/Services/Master_Form/type-master.service';
import { TypeMaster } from '../../../shared/Models/Master_Form/type-master.model';

@Component({
  selector: 'app-type-master',
  templateUrl: './type-master.component.html',
  styleUrls: ['./type-master.component.css']
})
export class TypeMasterComponent implements OnInit {

  constructor(public typeMasterservice :TypeMasterService ,public toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  update =0;
  resetForm(form? : NgForm): any {
    if(form!=null)
      form.reset();
      this.typeMasterservice.typeMaster ={
        TypeCode :'',
        Description :'',
        TypeMasterId:0,
        CreatedOn:null,
      }
    }
    OnSubmit(form: NgForm) {
      this.update = form.value.TypeMasterId;
      this.typeMasterservice.AddTypeMaster(form.value)
        .subscribe((data: any) => {
          if (data =="Succfull") {
           // this.resetForm(form);
           if(  this.update ==0 ){
            this.toastr.success('  Successfully Save', 'Successfully', {
              timeOut: 3000
            });
          }else{
            this.toastr.warning('  Successfully Updated', 'Updated', {
              timeOut: 3000
            });
          }
     this.typeMasterservice.getTypeMaster(); 
          }
          else
            this.toastr.error(data.Errors[0]);
        });
        this.resetForm(form);
            // this.toastr.success('Account  successful save.');
     //  this.accountService.getAllAccounts();
       }
}
