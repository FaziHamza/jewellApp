import { Injectable } from '@angular/core';
import { CurrencyDetail } from '../../Models/CurrencyDetail/currency-detail.model';
import { GoldDetail } from '../../Models/GoldDetail/gold-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  goldDetail :GoldDetail;
  
  currencyDetail:CurrencyDetail;
  allPaymentsArray=[];
  // goldDetailArray = [];
  chequeDetailArray = [];
  cardDetailArray = [];
  mattelDetailArray = [];
  currencyDetailArray = [];
  
  constructor() { }
}
