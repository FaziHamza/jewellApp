import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RateMasterService } from '../../../shared/Services/Master_Form/rate-master.service';
import { RateMaster } from '../../../shared/Models/Master_Form/rate-master.model';

@Component({
  selector: 'app-rate-master',
  templateUrl: './rate-master.component.html',
  styleUrls: ['./rate-master.component.css']
})
export class RateMasterComponent implements OnInit {

  typeMasterList : any[];
  constructor(public rateMasterservice :RateMasterService ,public toastr: ToastrService) { }
  ngOnInit() {
    this.rateMasterservice.typeMasterList().subscribe(res => {
      this.typeMasterList = res as any[];
    });
    this.resetForm();
  }
  update =0;
  resetForm(form? : NgForm): any {
    if(form!=null)
      form.reset();
      this.rateMasterservice.rateMaster ={
        RateMasterId:0,
        RateCode :'',
        TypemasterId :0,
        Select:'',
        ConvFact :0,
        CurrencyRate:0,
        Description :'' ,
        TypemasterCode :''
      }
    }
    OnSubmit(form: NgForm) {
      this.update = form.value.RateMasterId;
      this.rateMasterservice.AddRateMaster(form.value)
        .subscribe((data: any) => {
          if (data =="Succfull") {
           // this.resetForm(form);
            this.toastr.success('Account  Successfully Save', 'Successfully', {
              timeOut: 3000
            });
     this.rateMasterservice.getRateMaster(); 
          }
          else
            this.toastr.error(data.Errors[0]);
        });
        this.resetForm(form);

       }
}

