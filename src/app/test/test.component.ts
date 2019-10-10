import { Component, OnInit } from '@angular/core';
import { PaymentService, Vmmodel } from '../shared/Services/Payment/payment.service';
import { NgForm } from '@angular/forms';
import { CurrencyDetail } from '../shared/Models/CurrencyDetail/currency-detail.model';
import { GoldDetail } from '../shared/Models/GoldDetail/gold-detail.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  constructor(public paymentService:PaymentService) { }
  
  ngOnInit() {
    //this.paymentService.vmmodel = new  Vmmodel();
    this.resetForm();
    this.paymentService.allPaymentsArray;
  }
  Done(){
    console.log(this.paymentService.vmmodel.currencyDetail.Name);
    this.paymentService.vmmodel.goldDetail.Amount =Number(this.paymentService.vmmodel.currencyDetail.Name);
  }
  OnSubmit(fome?:NgForm){
    console.log(fome.value);
  }
  resetForm(form? : NgForm): any {
    if(form!=null)
      form.reset();
      this.paymentService.vmmodel ={
        currencyDetail:new  CurrencyDetail(),
        goldDetail:new GoldDetail(),
       }
  }
}
