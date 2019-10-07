import { Component, OnInit } from '@angular/core';
import { RattiMasterService } from '../../shared/Services/RattiMaster/ratti-master.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ratti-master',
  templateUrl: './ratti-master.component.html',
  styleUrls: ['./ratti-master.component.css']
})
export class RattiMasterComponent implements OnInit {

  constructor(private rattiMasterService : RattiMasterService,public toastr: ToastrService ) { }
  update =0;
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form? : NgForm): any {
    if(form!=null)
      form.reset();
      this.rattiMasterService.rattiMaster ={
        Code :'',
        Description :'',
        Purity:0,
        RattiMasterId:0,
        Createdon:null,
      }
    }
    OnSubmit(form: NgForm) {
      this.update =form.value.RattiMasterId;
      this.rattiMasterService.AddRattiMaster(form.value)
      .subscribe((data: any) => {
        if (data =="Succfull") {
         // this.resetForm(form);
        if(  this.update == 0 )
        {
          this.toastr.success('Ratti  Successfully Save', 'Successfully', {
            timeOut: 3000
          });
        }else{
          this.toastr.warning('Ratti  Successfully Updated', 'Updated', {
            timeOut: 3000
          });
        }
       
   this.rattiMasterService.getRatti(); 
        }
        else
          this.toastr.error(data.Errors[0]);
      });
        this.resetForm(form);   
     // alert(JSON.stringify(form.value)));
       };
}
