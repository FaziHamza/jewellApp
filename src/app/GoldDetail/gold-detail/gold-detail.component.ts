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
import { DatePipe, JsonPipe } from '@angular/common';
import { BankService } from 'src/app/shared/Services/Bank/bank.service';
import { Bank } from 'src/app/shared/Models/Bank/Bank.model';
import { BankAccountHolder } from 'src/app/shared/Models/BankAccountHolder/BankAccountHolder.mdoel';
import { BankAccountHolderService } from 'src/app/shared/Services/BankAccountHolder/bank-account-holder.service';
import { CurrencyDetail } from 'src/app/shared/Models/CurrencyDetail/currency-detail.model';
import { GoldDetail } from 'src/app/shared/Models/GoldDetail/gold-detail.model';
import { ChequeDetail } from 'src/app/shared/Models/Cheque/ChequeDetail.model';
import { GoldRates } from 'src/app/shared/Models/GoldRate/gold-rate.model';
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
  paidRecived ;
  goldRateDetail:any; 
  goldRate;
  description;
  paymentTypeInList;
  gold;
  ruppes;
  GoldRate;

  public  karatmasterList : KaratMaster[];
   //constructor(public activeModal: NgbActiveModal) { }
  constructor(public paymentService:PaymentService ,
    public purchaseService:PurchaseService,
    public defaultSettingService :DefaultSettingService ,
     public formulaService : FormulaService,
     public  currencyTypeService :CurrencyTypeService,
     public goldRateService :GoldRateService,
    public karatMasterservive:KaratMasterService,
      public bankService:BankService,
      public datePipe: DatePipe,
      public bankAccountHolderService: BankAccountHolderService,
      )
      {
        setInterval(() => {
          this.currentDateTime = this.datePipe.transform(new Date(),"MMM d, y, h:mm:ss a")}, 1);
      }
  ngOnInit() {
    if(this.paymentService.formtype=="Purchase"){
      this.paidRecived ="Recived";
    }else{
      this.paidRecived ="Paid";

    }
    this.resetForm();
    this.karatMasterservive.getKaratList().subscribe(res => {
      this.karatmasterList = res as KaratMaster[];
    });
    this.bankService.getBanks();

      this.currencyTypeService.getcurrencyList().subscribe(res => {
      this.currencyList = res as any[];
       this.paymentService.paymentVm.GoldDetail.CurrencyTypes = this.currencyList.filter(c=>c.Code=="PKR")[0];
    });
    this.goldRateService.getGoldRateSubscribe().subscribe(res => {
      this.goldRateDetail = res as any;
      this.goldRate = this.goldRateDetail.K24Tola;
    });
    alert(JSON.stringify(localStorage.getItem("User")));
   // alert(this.GoldRate);
    // alert(JSON.stringify(AppSettting.GoldRates));
}

  resetForm(form? : NgForm): any {
    if(form!=null)
      form.reset();
      this.paymentService.paymentVm ={
      ChequeDetail :new ChequeDetail(),
      CurrencyDetail: new CurrencyDetail(),
      GoldDetail :new GoldDetail(),
      }
  }

    calculateTotal(paymentType, amount){
     
      if(paymentType=="Gold"){
        this.purchaseService.purchase.GoldPayment +=Number(amount);
      }else{
        this.purchaseService.purchase.CashPayment +=Number(amount);
      }
    }
  onSubmit( )
{
 
  if(this.paymentType=="Gold"){
    this.gold = this.paymentService.paymentVm.GoldDetail.Net;
    this.ruppes =0;
  }else{
    this.ruppes = this.paymentService.paymentVm.GoldDetail.Net;
    this.gold=0;
  }

  if(this.paymentService.paymentVm.GoldDetail.CurrencyTypes.Type=="Mattel"){
    this.mattelDetailList =
    {
      CurrencyCode: this.paymentService.paymentVm.GoldDetail.CurrencyTypes.Code,
      Kaat_Point: this.paymentService.paymentVm.GoldDetail.Kaat_Point,
      GoldDetailId: this.paymentService.paymentVm.GoldDetail.GoldDetailId,
      Karat: this.paymentService.paymentVm.GoldDetail.Karat,
      Weight: this.paymentService.paymentVm.GoldDetail.Weight,
      Pureweight: this.paymentService.paymentVm.GoldDetail.Pureweight,
      PaymentType:this.paymentType,
      MasterType:this.paymentService.paymentVm.GoldDetail.CurrencyTypes.Type,
      Net: this.paymentService.paymentVm.GoldDetail.Net,
      Status:this.paidRecived,
    }
this.paymentService.mattelDetailArray.push(this.mattelDetailList);
this.calculateTotal(this.paymentType,this.paymentService.paymentVm.GoldDetail.Net);
// this.description = this.paymentService.goldDetail.CurrencyTypes.Code +" Currency Rate : "+ this.paymentService.goldDetail.CurrencyRate +" Amount : "+ this.paymentService.goldDetail.Amount +" Date : "+ this.currentDateTime +" Gold Rate :"+ this.goldRate +" ";
this.description = this.paymentService.paymentVm.GoldDetail.CurrencyTypes.Code +" Kaat : "+ this.paymentService.paymentVm.GoldDetail.Kaat_Point + " Date : "+ this.currentDateTime +" Gold Rate : "+ this.goldRate +" ";
  }
  else if(this.paymentService.paymentVm.GoldDetail.CurrencyTypes.Type=="Currency"){
    this.currencyDetailList =
    {
      Name: this.paymentService.paymentVm.GoldDetail.CurrencyTypes.Code,
      CurrencyId: this.paymentService.paymentVm.GoldDetail.CurrencyTypes.CurrencyId,
      Amount: this.paymentService.paymentVm.GoldDetail.Amount,
      Net: this.paymentService.paymentVm.GoldDetail.Net,
      Rate: this.paymentService.paymentVm.GoldDetail.CurrencyRate,
      Remarks: this.paymentService.paymentVm.GoldDetail.Remarks,
      PaymentType:this.paymentType,
      MasterType:this.paymentService.paymentVm.GoldDetail.CurrencyTypes.Type,
      Status:this.paidRecived,
    }
this.paymentService.currencyDetailArray.push(this.currencyDetailList);
this.calculateTotal(this.paymentType,this.ruppes);

this.description =  this.paymentService.paymentVm.GoldDetail.CurrencyTypes.Code +" Currency Rate : "+ this.paymentService.paymentVm.GoldDetail.CurrencyRate +" Amount : "+ this.paymentService.paymentVm.GoldDetail.Amount +" Date : "+ this.currentDateTime +" Gold Rate :"+ this.goldRate +" ";

  }
  else if(this.paymentService.paymentVm.GoldDetail.CurrencyTypes.Type=="Cheque")
  {
    this.chequeDetailList=
    {
      ChequeNumber:this.paymentService.paymentVm.ChequeDetail.ChequeNumber,
      ChequeDate:this.paymentService.paymentVm.ChequeDetail.ChequeDate,
      BankId:this.paymentService.paymentVm.ChequeDetail.Banks.BankId,
      BankAccountHolderId:this.paymentService.paymentVm.ChequeDetail.BankAccountHolders.AccountHolderId,
      AccountNo:this.paymentService.paymentVm.ChequeDetail.BankAccountHolders.AccountHolderNo,
      Amount:this.paymentService.paymentVm.ChequeDetail.Amount,
      Net:this.paymentService.paymentVm.ChequeDetail.Net,
      PaymentType:this.paymentService.paymentVm.GoldDetail.CurrencyTypes.Code,
      MasterType:this.paymentService.paymentVm.GoldDetail.CurrencyTypes.Type,
      Status:this.paidRecived,

    }
  this.paymentService.chequeDetailArray.push(this.chequeDetailList);
  this.calculateTotal(this.paymentType,this.paymentService.paymentVm.GoldDetail.Net);
this.ruppes = this.paymentService.paymentVm.GoldDetail.Net;

  this.description =  this.paymentService.paymentVm.GoldDetail.CurrencyTypes.Code +" Account Detail : "+ this.paymentService.paymentVm.ChequeDetail.BankAccountHolders.AccountHolderName
  +","+ this.paymentService.paymentVm.ChequeDetail.BankAccountHolders.AccountHolderNo +","+ this.paymentService.paymentVm.ChequeDetail.Banks.BankName +" Amount : "+this.paymentService.paymentVm.GoldDetail.Net +" Date : "+ this.currentDateTime +" Gold Rate :"+ this.goldRate +" ";
  // this.purchaseService.purchase. = Number(this.purchaseService.purchase.GoldPayment)+ Number(this.paymentService.goldDetail.Net);

  }

  this.allPaymentDetailList=
  {
    PaymentType:this.paymentService.paymentVm.GoldDetail.CurrencyTypes.Code,
    MasterType:this.paymentService.paymentVm.GoldDetail.CurrencyTypes.Type,
    Description:this.description,
    Gold:this.gold,
    Rupess:this.ruppes,
    Status:this.paidRecived,
  };
this.paymentService.allPaymentsArray.push(this.allPaymentDetailList)
this.gold= ''
this.ruppes= ''

//this.resetForm();
}
ondelete(item:any)
{ 
  if(item.MasterType=="Currency"){
    this.deleteRecode(this.paymentService.currencyDetailArray,item.MasterType);
  }else if(item.MasterType=="Mattel"){
    this.deleteRecode(this.paymentService.mattelDetailArray,item.MasterType);
  }
  else if(item.MasterType=="Cheque")
  {
    this.deleteRecode(this.paymentService.chequeDetailArray,item.MasterType);

  }
  this.deleteRecode(this.paymentService.allPaymentsArray,item);

      this.purchaseService.purchase.GoldPayment = Number(this.purchaseService.purchase.GoldPayment) -Number(item.Pureweight) ;//this.paymentService.goldDetail.Pureweight;
    }



    deleteRecode(list,itemName){
      let Index=list.indexOf(itemName);
      list.splice(Index, 1);
      
      }
    
    calculateGoldDetail(){
    
      // // // if(this.paymentService.goldDetail.CurrencyTypes.Type=="Mattel")
      // // // {
      // // //   this.paymentService.goldDetail.Pureweight =  Number(this.formulaService.calculatePureWeight(this.paymentService.goldDetail.Weight,0,this.paymentService.goldDetail.Kaat_Point));
      // // //   if(this.paymentType=='Gold'){
      // // //     this.paymentService.goldDetail.Net=  this.paymentService.goldDetail.Pureweight
      // // //   }else{
      // // //   var res =  Number(((this.goldRate)/11.664)*Number(this.paymentService.goldDetail.Pureweight)).toFixed(AppSettting.ToFixed);
      // // //   this.paymentService.goldDetail.Net = Number(res); 
      // // // }
      // // // }
      // // // else if(this.paymentService.goldDetail.CurrencyTypes.Type=="Currency"){
      // // //   if(this.paymentType=='Gold'){
      // // //     var res =  Number(((this.goldRate)/11.664)/Number(this.paymentService.goldDetail.CurrencyRate)).toFixed(AppSettting.ToFixed);
      // // //     this.paymentService.goldDetail.Net = Number(res); 
       
      // // //   }else{
      // // //     var res =  Number(Number(this.paymentService.goldDetail.CurrencyRate)*Number(this.paymentService.goldDetail.Amount)).toFixed(AppSettting.ToFixed);
      // // //   this.paymentService.goldDetail.Net = Number(res); 
      // // //   }
      // // // }
      // // // else if(this.paymentService.goldDetail.CurrencyTypes.Type=="Cheque"){
      // // //   if(this.paymentType=='Gold'){
      // // //     var res =  Number(((this.goldRate)/11.664)/Number(this.paymentService.goldDetail.Amount)).toFixed(AppSettting.ToFixed);
      // // //     this.paymentService.goldDetail.Net = Number(res); 
       
      // // //   }else{
      // // //   this.paymentService.goldDetail.Net = Number(this.paymentService.goldDetail.Amount)
      // // //   }
      // // // }
      
    

      //  this.paymentService.goldDetail.Pureweight= Number(((Number(this.paymentService.goldDetail.Weight))*(96- Number(this.paymentService.goldDetail.Kaat_Point))/96 ).toFixed(3)); //Pdpurity

       //this.paymentService.goldDetail.Pureweight = Number(this.paymentService.goldDetail.Weight) * Number(this.paymentService.goldDetail.Kaat_Point)

     
   }
   
  //  paymentTypeChange(){
  //   if(this.paymentType=="Gold"){
  //     this.paymentType="Pkr Rupees"
  //   }
  //   else if(this.paymentType="Pkr Rupees"){
  //    this.paymentType="Gold"

  //   }
  //   this.calculateGoldDetail();
  // }
  
   paymentTypeChange()
   {
     if(this.paymentType=="Gold"){
       this.paymentType="Pkr Rupees"
     }
     else if(this.paymentType="Pkr Rupees"){
      this.paymentType="Gold"
     }
     this.calculateGoldDetail();
   }

   paidRecivedChange(){
    if(this.paidRecived=="Paid"){
      this.paidRecived="Recived"
    }
    else if(this.paidRecived="Recived"){
     this.paidRecived="Paid"

    }
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
   onBankChange(item:Bank){
    //  alert(item.BankId);
    this.paymentService.paymentVm.ChequeDetail.AccountNo ='';
     this.bankAccountHolderService.getBankAccountHolder(item.BankId).subscribe(res=>{
      this.bankAccountHolderService.bankAccountHolder = res as BankAccountHolder[];

     })
   }
   onBankAccountHolder(item:BankAccountHolder){
    this.paymentService.paymentVm.ChequeDetail.AccountNo=item.AccountHolderNo;
   }
  //  onKaratChange(event){
  //       this.paymentService.getStandardPurity(event).subscribe(res => this.paymentService.goldDetail.Kaat_Point = res as number);
  //       }
}

