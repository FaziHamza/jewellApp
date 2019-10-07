import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../shared/Services/Payment/payment.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public paymentService:PaymentService) { }

  ngOnInit() {
    this.paymentService.allPaymentsArray;
  }

}
