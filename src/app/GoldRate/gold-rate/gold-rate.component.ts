import { Component, OnInit } from '@angular/core';
import { GoldRateService } from '../../shared/Services/GoldRate/gold-rate.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
//  import swal from 'sweetalert2';
import { GoldRate, GoldRates } from '../../shared/Models/GoldRate/gold-rate.model';
@Component({
  selector: 'app-gold-rate',
  templateUrl: './gold-rate.component.html',
  styleUrls: ['./gold-rate.component.css']
})
export class GoldRateComponent implements OnInit {
  
  itemservice: any;

  goldRate :GoldRates;
  constructor(private goldRateService :GoldRateService, private toastr: ToastrService) { }
  WeightInGm :number =11.664;
  rate :number;
   swalWithBootstrapButtons :any;

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.goldRate = 
    {
      GoldRateId: 0,
      RateDate:  null,
      K12: 0,
      K13: 0,
      K14: 0,
      K15: 0,
      K16: 0,
      K17: 0,
      K18: 0,
      K19: 0,
      K20: 0,
      K21: 0,
      K22: 0,
      K23: 0,
      K24: 0,
      //
      K12Tola: 0,
      K13Tola: 0,
      K14Tola: 0,
      K15Tola: 0,
      K16Tola: 0,
      K17Tola: 0,
      K18Tola: 0,
      K19Tola: 0,
      K20Tola: 0,
      K21Tola: 0,
      K22Tola: 0,
      K23Tola: 0,
      K24Tola: 0,
      DolleeounceRate: 0,
    }
  }
  UpdateTolaRate(ratevalue:any) {
    this.rate  = Number(ratevalue.target.value);
    // console.log(this.rate);
    // this.goldRateService.goldRate.K23Tola =Number((((23 * 0.0416666 * Number(this.rate)) / this.WeightInGm) * this.WeightInGm).toFixed(0));
    this.goldRate.K22Tola =Number((((22 * 0.0416666 * Number(this.rate)))).toFixed(0));
    this.goldRate.K21Tola =Number((((21 * 0.0416666 * Number(this.rate)))).toFixed(0));
    this.goldRate.K18Tola =Number((((18 * 0.0416666 * Number(this.rate)))).toFixed(0));
        this.UpdateGramRate(this.rate);
  }
  UpdateGramRate(ratevalue:any) {
    // this.rate  = Number(ratevalue.target.value);
    // console.log(this.rate);
    // this.goldRateService.goldRate.K23Tola =Number((((23 * 0.0416666 * Number(this.rate)) / this.WeightInGm) * this.WeightInGm).toFixed(0));
    this.goldRate.K24 =Number(((24 * 0.0416666 * Number(this.rate) / this.WeightInGm)).toFixed(0));
    this.goldRate.K22 =Number(((22 * 0.0416666 * Number(this.rate) / this.WeightInGm)).toFixed(0));
    this.goldRate.K21 =Number(((21 * 0.0416666 * Number(this.rate) / this.WeightInGm)).toFixed(0));
    this.goldRate.K18 =Number(((18 * 0.0416666 * Number(this.rate) / this.WeightInGm)).toFixed(0));
        
  }
  
  update =0;
  OnSubmit(form: NgForm) {
// alert(JSON.stringify(form.value));

    // swal.fire({
    //   title: 'Are you sure?',
    //   text: "You won't be able to do this!",
    //   type: 'warning',
    //   showCancelButton: true,
    //   cancelButtonClass:"btn-warning",
    //   cancelButtonText: 'Yes, Update it!',
    //   confirmButtonText: 'Yes, Save it!',
    //   reverseButtons: true
    // }).then((result) => {
    //   if (result.value) {
    //     form.value.GoldRateId =0;
    //     this.goldRateService.addGoldRate(form.value)
    //     .subscribe((data: any) => {
    //       if (data == 'Succfull') {
    //        this.resetForm(form);
    //        if(  this.update ==0 ){
    //         this.toastr.success('Gold Rate  Successfully Save', 'Successfully', {
    //           timeOut: 3000
    //         });
    //       }else{
    //         this.toastr.warning('Gold Rate  Successfully Updated', 'Updated', {
    //           timeOut: 3000
    //         });
    //       }
    //        this.goldRateService.getGoldRate();
    //       }
    //       else{
    //         this.toastr.error("Some Error Occurs..!");
    //         this.goldRateService.getGoldRate();
    //       }
    //     });
    //   } 
    //   else if (
        
    //     result.dismiss === swal.DismissReason.cancel
    //   ) 
    //   {
    //     form.value.GoldRateId =1;
    //     this.update =1;
    //     this.goldRateService.addGoldRate(form.value)
    //     .subscribe((data: any) => {
    //       if (data == 'Succfull') {
    //        this.resetForm(form);
    //        if(  this.update ==0 ){
    //         this.toastr.success('Gold Rate  Successfully Save', 'Successfully', {
    //           timeOut: 3000
    //         });
    //       }else{
    //         this.toastr.warning('Gold Rate  Successfully Updated', 'Updated', {
    //           timeOut: 3000
    //         });
    //       }
    //        this.goldRateService.getGoldRate();
    //       }
    //       else{
    //         this.toastr.error("Some Error Occurs..!");
    //         this.goldRateService.getGoldRate();
    //       }
    //     });
    //   }
    // })

   
          // this.toastr.success('Items  successful save.');
    // this.accountService.getAllAccounts();
     }

}
