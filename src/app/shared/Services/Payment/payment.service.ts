import { Injectable } from '@angular/core';
import { CurrencyDetail } from '../../Models/CurrencyDetail/currency-detail.model';
import { GoldDetail } from '../../Models/GoldDetail/gold-detail.model';
import { PaymentVm } from '../../viewmodel/PaymentViewModel/PaymentVm.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  paymentVm :PaymentVm;
  //goldDetail :GoldDetail;
  vmmodel:Vmmodel;
  currencyDetail:CurrencyDetail;
  allPaymentsArray=[];
  
  // goldDetailArray = [];
  chequeDetailArray = [];
  cardDetailArray = [];
  mattelDetailArray = [];
  currencyDetailArray = [];
  formtype;
  constructor() { 
  }
}

export class Vmmodel{
  goldDetail :GoldDetail;
  currencyDetail:CurrencyDetail;
}