import { Component, OnInit ,Input } from '@angular/core';
//import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { DefaultSettingService } from '../../shared/Services/DefaultSettings/default-setting.service';
import { KaratMasterService } from '../../shared/Services/Master_Form/karat-master.service';
import { KaratMaster } from '../../shared/Models/Master_Form/karat-master.model';
import { AppSettting } from 'src/environments/environment.prod';
import { FormulaService } from 'src/app/shared/Services/Helper/formula.service';
import { CurrencyTypeService } from 'src/app/shared/Services/Master_Form/Currency-type.service';
import { GoldRateService } from 'src/app/shared/Services/GoldRate/gold-rate.service';
import { PaymentService } from 'src/app/shared/Services/Payment/payment.service';
import { PurchaseService } from 'src/app/shared/Purchaseservices/purchase.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-gold-detail',
  templateUrl: './gold-detail.component.html',
  styleUrls: ['./gold-detail.component.css']
})
export class GoldDetailComponent implements OnInit {
  currentDateTime: any;
  @Input() src;
  
  
  currencyDetailList;
  cardDetailList;
  chequeDetailList;
  mattelDetailList;
  allPaymentDetailList;
  
  currencyList :any[];
  standardPurity:number=0;
  cardPanel:boolean=false;
  currencyPanel:boolean=false;
  mattelPanel:boolean=false;
  chequePanel:boolean=false;
  paymentType="Gold";
  goldRateDetail:any; 
  goldRate;
  description;
  paymentTypeInList;
  gold;
  ruppes;

  public  karatmasterList : KaratMaster[];
   //constructor(public activeModal: NgbActiveModal) { }
  constructor(public paymentService:PaymentService ,
    public purchaseService:PurchaseService,
     public defaultSettingService :DefaultSettingService ,
     public formulaService : FormulaService,
     public  currencyTypeService :CurrencyTypeService,
     public goldRateService :GoldRateService,
      public karatMasterservive:KaratMasterService,
      public datePipe: DatePipe){
        setInterval(() => {
          this.currentDateTime = this.datePipe.transform(new Date(),"MMM d, y, h:mm:ss a")}, 1);
      }
  ngOnInit() {
    this.resetForm();
    this.karatMasterservive.getKaratList().subscribe(res => {
      this.karatmasterList = res as KaratMaster[];
    });

      this.currencyTypeService.getcurrencyList().subscribe(res => {
      this.currencyList = res as any[];
    });
    this.goldRateService.getGoldRateSubscribe().subscribe(res => {
      this.goldRateDetail = res as any;
      this.goldRate = this.goldRateDetail.K24Tola;
    });
}
  
  resetForm(form? : NgForm): any {
    if(form!=null)
      form.reset();
      this.paymentService.goldDetail ={
        GoldDetailId :0,
        Kaat_Point:0,
        Karat:0,
        PurchaseNo:0,
        Pureweight:0,
        SaleNo:0,
        Weight:0,
        CurrencyTypes:null,
        Net:0,
        Amount:0,
        CurrencyRate:0,
        Remarks:'',
        GoldRate:0,
        Banks:null,
        ChequeDate:null,
        ChequeNumber:'',
        AccountNo:'',
        // AcBankAccountHolders:null
      }
  }

  onSubmit( )
{
  if(this.paymentService.goldDetail.CurrencyTypes.Type=="Mattel"){
    this.mattelDetailList =
    {
      CurrencyCode: this.paymentService.goldDetail.CurrencyTypes.Code,
      Kaat_Point: this.paymentService.goldDetail.Kaat_Point,
      GoldDetailId: this.paymentService.goldDetail.GoldDetailId,
      Karat: this.paymentService.goldDetail.Karat,
      Weight: this.paymentService.goldDetail.Weight,
      Pureweight: this.paymentService.goldDetail.Pureweight,
      PaymentType:this.paymentType,
      MasterType:this.paymentService.goldDetail.CurrencyTypes.Type,
    }
this.paymentService.mattelDetailArray.push(this.mattelDetailList);
// this.description = this.paymentService.goldDetail.CurrencyTypes.Code +" Currency Rate : "+ this.paymentService.goldDetail.CurrencyRate +" Amount : "+ this.paymentService.goldDetail.Amount +" Date : "+ this.currentDateTime +" Gold Rate :"+ this.goldRate +" ";

this.description = this.paymentService.goldDetail.CurrencyTypes.Code +" Kaat : "+ this.paymentService.goldDetail.Kaat_Point + " Date : "+ this.currentDateTime +" Gold Rate : "+ this.goldRate +" ";
this.gold = this.paymentService.goldDetail.Net;

  }else if(this.paymentService.goldDetail.CurrencyTypes.Type=="Currency"){
    this.currencyDetailList =
    {
      Name: this.paymentService.goldDetail.CurrencyTypes.Code,
      CurrencyId: this.paymentService.goldDetail.CurrencyTypes.CurrencyId,
      Amount: this.paymentService.goldDetail.Amount,
      Net: this.paymentService.goldDetail.Net,
      Rate: this.paymentService.goldDetail.CurrencyRate,
      Remarks: this.paymentService.goldDetail.Remarks,
      PaymentType:this.paymentType,
      MasterType:this.paymentService.goldDetail.CurrencyTypes.Type,
    }
this.paymentService.currencyDetailArray.push(this.currencyDetailList);
this.ruppes = this.paymentService.goldDetail.Net;
this.description =  this.paymentService.goldDetail.CurrencyTypes.Code +" Currency Rate : "+ this.paymentService.goldDetail.CurrencyRate +" Amount : "+ this.paymentService.goldDetail.Amount +" Date : "+ this.currentDateTime +" Gold Rate :"+ this.goldRate +" ";

  }
  this.allPaymentDetailList=
  {
    PaymentType:this.paymentService.goldDetail.CurrencyTypes.Code,
    MasterType:this.paymentService.goldDetail.CurrencyTypes.Type,
    Description:this.description,
    Gold:this.gold,
    Rupess:this.ruppes,
  };
this.paymentService.allPaymentsArray.push(this.allPaymentDetailList)
this.gold= ''
this.ruppes= ''

// this.purchaseService.purchase.GoldPayment = Number(this.purchaseService.purchase.GoldPayment)+ Number(this.paymentService.goldDetail.Pureweight);
//this.resetForm();
}
ondelete(item:any)
{ 
  if(item.MasterType=="Currency"){
    
    let currencyIndex=this.paymentService.currencyDetailArray.indexOf(item.MasterType);
    this.paymentService.currencyDetailArray.splice(currencyIndex, 1);
  }else if(item.MasterType=="Mattel"){

    let mattelIndex=this.paymentService.mattelDetailArray.indexOf(item.MasterType);
    this.paymentService.mattelDetailArray.splice(mattelIndex, 1);
  }
  let paymentsIndex=this.paymentService.allPaymentsArray.indexOf(item);
    this.paymentService.allPaymentsArray.splice(paymentsIndex, 1);
      // console.log("item : "+item);
      // console.log("item id : "+item.id);
      // let index=this.paymentService.mattelDetailArray.indexOf(item);
      // this.paymentService.mattelDetailArray.splice(index, 1);
      this.purchaseService.purchase.GoldPayment = Number(this.purchaseService.purchase.GoldPayment) -Number(item.Pureweight) ;//this.paymentService.goldDetail.Pureweight;
    }

    
    calculateGoldDetail(){
    
      if(this.paymentService.goldDetail.CurrencyTypes.Type=="Mattel")
      {
        this.paymentService.goldDetail.Pureweight =  Number(this.formulaService.calculatePureWeight(this.paymentService.goldDetail.Weight,0,this.paymentService.goldDetail.Kaat_Point));
        if(this.paymentType=='Gold'){
          this.paymentService.goldDetail.Net=  this.paymentService.goldDetail.Pureweight
        }else{
        var res =  Number(((this.goldRate)/11.664)*Number(this.paymentService.goldDetail.Pureweight)).toFixed(AppSettting.ToFixed);
        this.paymentService.goldDetail.Net = Number(res); 
      }
      }
      else if(this.paymentService.goldDetail.CurrencyTypes.Type=="Currency"){
        if(this.paymentType=='Gold'){
          var res =  Number(((this.goldRate)/11.664)/Number(this.paymentService.goldDetail.CurrencyRate)).toFixed(AppSettting.ToFixed);
          this.paymentService.goldDetail.Net = Number(res); 
       
        }else{
          var res =  Number(Number(this.paymentService.goldDetail.CurrencyRate)*Number(this.paymentService.goldDetail.Amount)).toFixed(AppSettting.ToFixed);
        this.paymentService.goldDetail.Net = Number(res); 
        }
      }
      
    

      //  this.paymentService.goldDetail.Pureweight= Number(((Number(this.paymentService.goldDetail.Weight))*(96- Number(this.paymentService.goldDetail.Kaat_Point))/96 ).toFixed(3)); //Pdpurity

       //this.paymentService.goldDetail.Pureweight = Number(this.paymentService.goldDetail.Weight) * Number(this.paymentService.goldDetail.Kaat_Point)

     
   }
   paymentTypeChange(){
     if(this.paymentType=="Gold"){
       this.paymentType="Pkr Rupees"
     }
     else if(this.paymentType="Pkr Rupees"){
      this.paymentType="Gold"

     }
     this.calculateGoldDetail();
   }
   onCurrency(item:any){
  
  //    if(item.isTrusted==true){
  //         this.paymentService.goldDetail.CurrencyType ={
  //     Code :'ASDAJSDH',
  //  CurrencyId :0,
  //  Description:'ff',
  //  Type :'New Type',
  //   };
  //    }
  //    console.log(item);
  //   this.paymentService.goldDetail.CurrencyType ={
  //     Code :'Fazi',
  //  CurrencyId :0,
  //  Description:'ff',
  //  Type :'New Type',
  //   };

  //this.resetForm();
     if(item.Type=="Cheque")
     {
      this.showHide(true,false,false,false);
     }
     else if(item.Type=="Card"){
      this.showHide(false,true,false,false);
     }else if(item.Type=="Mattel"){
      this.showHide(false,false,true,false);
     }else if(item.Type=="Currency"){
      this.showHide(false,false,false,true);
     }
    
   }
   showHide(cheque,card, mattel, currency){
  
    this.chequePanel=cheque;
    this.cardPanel=card;
    this.mattelPanel=mattel;
    this.currencyPanel=currency;

   }
   
  //  onKaratChange(event){
  //       this.paymentService.getStandardPurity(event).subscribe(res => this.paymentService.goldDetail.Kaat_Point = res as number);
  //       }
}

