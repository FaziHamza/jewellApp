import { Component, ViewChild, OnInit } from '@angular/core';
import { KaratMasterService } from '../../shared/Services/Master_Form/karat-master.service';
import { NgForm } from '@angular/forms';
import { ItemService } from '../../shared/Services/Items/item.service';
import { KaratMaster } from '../../shared/Models/Master_Form/karat-master.model';
import { RateMaster } from '../../shared/Models/Master_Form/rate-master.model';
import { FormBuilder,FormGroup, Validators,FormArray } from '@angular/forms';
import { StonGridComponent } from '../ston-grid/ston-grid.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { GoldDetailComponent } from '../../GoldDetail/gold-detail/gold-detail.component';
import { DefaultSettingService } from '../../shared/Services/DefaultSettings/default-setting.service';
import { DefaultSetting } from '../../shared/Models/DefaultSetting/DefaultSetting';
import { SubItem } from '../../shared/Models/SubItem/sub-item.model';
import { SubItemService } from '../../shared/Services/SubItem/sub-item.service';
import { RattiMaster } from '../../shared/Models/RattiMaster/ratti-master.model';
import { allSettled } from 'q';
import { AccountMasterService } from 'src/app/shared/Services/Account/AccountMaster/account-master.service';
import { FormulaService } from 'src/app/shared/Services/Helper/formula.service';
import { environment, AppSettting } from 'src/environments/environment.prod';
import { RattiMasterService } from 'src/app/shared/Services/RattiMaster/ratti-master.service';
import { PurchaseService } from 'src/app/shared/Purchaseservices/purchase.service';
import { RateMasterService } from 'src/app/shared/Services/Master_Form/rate-master.service';
import { CurrencyTypeService } from 'src/app/shared/Services/Master_Form/Currency-type.service';
import { PaymentService } from 'src/app/shared/Services/Payment/payment.service';
import { PurcahseDetail } from 'src/app/shared/Purchaseservices/purchase-details.model';


//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  Origin :string  = AppSettting.Origin;
  @ViewChild(StonGridComponent,{static:false}) childStonGrid :StonGridComponent;
  @ViewChild(GoldDetailComponent,{static:false}) childGoldDetail :GoldDetailComponent;

  // @ViewChild(StonGridComponent,{static:false}) child :StonGridComponent;
 
  constructor(public purchaseService:PurchaseService ,
    public paymentService:PaymentService,
    public currencyTypeService :CurrencyTypeService,
    public karatMasterService:KaratMasterService,
    public rateMasterService :RateMasterService,
    public toastr: ToastrService,
    public itemService : ItemService,
    public subItemServies : SubItemService,
    public accountMasterService: AccountMasterService,
    public formulaService : FormulaService,
    public rattiService: RattiMasterService,

    public dialog: MatDialog,

    public defaultSettingService: DefaultSettingService,
    public fb: FormBuilder ) {
// constructor

this.Origin = AppSettting.Origin;
     
}
     cities4 = [];
  
  accountlist : any[];
  currencyList :any[];
  rateName : any;
  standardPurity : number=0;
  
  public  ratemasterlist : RateMaster[];
  public  karatmasterList : KaratMaster[];
  public  ItemListList ;
  public  SubItemListList : SubItem[];
  public RattiList : RattiMaster[]
  totalQty;
  totalWeight;
  TotalPweight;
  goldPrice;
  totalMaking;
  TotalPrice;
  rateFix ="c";
  lblcart = "Purity";
  making = "Making per Gram";
  getCode ;
  myArry=[];
  purchaseDetail;
  purchaseDetails;
  productForm: FormGroup;
  message:string;
  messageTesting:any;

  swap=[];
  ngOnInit()
   {
     this.resetForm();

    this.itemService.getItemListforPurchase().subscribe(res => {
      this.ItemListList = res as any[];
    });
    if(AppSettting.Origin=="Pakistan"){
  

      this.defaultSettingService.readonly =true;
      this.lblcart ="Kaat";
  
      this.rattiService.getRattiList().subscribe(res => {
        this.RattiList = res as RattiMaster[];
      });
    }
      else
      {
        this.defaultSettingService.readonly =false;
        this.lblcart = "Purity";
      }
 
    this.accountMasterService.getAccountList().subscribe(res => {
      this.accountlist = res as any[];
    });
    this.currencyTypeService.getcurrencyList().subscribe(res => {
      this.currencyList = res as any[];
    });
  this.rateMasterService.getratmaster().subscribe(res => {
    this.ratemasterlist = res as RateMaster[];
  });
  this.karatMasterService.getKaratList().subscribe(res => {
    this.karatmasterList = res as KaratMaster[];
  });
 
  }
  
  goldDetailListadd(){
    this.purchaseService.purchase.GoldDetails = this.paymentService.mattelDetailArray;
  }
  // open modeal
  goldDetailPop(link){
     this.paymentService.formtype ="Purchase"
    if(AppSettting.Origin=="Pakistan"){
      this.defaultSettingService.readonly =true;
    }
      else
      {
        this.defaultSettingService.readonly =false;
      }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    dialogConfig.height = "80%";

    this.dialog.open(GoldDetailComponent,dialogConfig);
  }
  OnSubmit(form: NgForm) {
    this.purchaseService.purchase.PurcahseDetails = this.myArry;
    this.purchaseService.purchase.StoneDetails= this.childStonGrid.stoneArray;
    this.purchaseService.purchase.GoldDetails = this.paymentService.mattelDetailArray;
    this.purchaseService.addPurchase(form.value,this.purchaseService.purchase.PurcahseDetails, this.purchaseService.purchase.StoneDetails,this.purchaseService.purchase.AccountMasters , this.purchaseService.purchase.GoldDetails)
    .subscribe((data: any) => {
      if (data =="Succfull") {
        this.toastr.success('Purchase  Successfully Save', 'Successfully', {
          timeOut: 3000
        });
      }
      else
        this.toastr.error(data.Errors[0]);
    });
     }
  resetForm(form? : NgForm): any {
    if(form!=null)
      form.reset();
      this.purchaseService.purchase ={
        PurchaseId :0,
        PurchaseNo: 0,
        BillNo: '',
        PurchaseDate: '',
        AccountNo: '',
        RateCode: '',
        GoldRate: 0,
        RefrenceNo: '',
        Description: '',
        Karat:'',
        TotalMaking: 0,
        Status: '',
        TotalPureWeight:0,
        GoldPayment: 0,
        CashPayment: 0,
        CurrencyCode: '',
        TypeCode: '',
        CreatedOn: '',
        PurcahseDetails : null,
        StoneDetails : null,

 
        TotalQty :0,
        TotalWeight:0,
        TotalPweight:0,
        GoldPrice:0,
        TotalPrice:0,
     
        stoneId:0,
        SType:'',
        SName :'',
        Squantity:0,
        Sweight :0,
        SPrice :0,
        SRate :0,
        ConvFact:0,
        AccountMasters:null,
        GoldDetails:null,
        Items:null,
        PurcahseDetail :new  PurcahseDetail(),
      }
    
    }
   
  togglelbl(){
    if(this.lblcart=="Purity"){
      this.lblcart ="Kaat";
    }
    else{
      this.lblcart ="Purity";
    }
}
 getRateFix(){
       var getCode   = this.ratemasterlist.filter( c=>c.RateCode=="GMS")[1];
       alert(getCode.RateCode);
    }
    makingChnage(){
      if(this.making=="Making per Gram"){
        this.making="Making per Tola";
      }else if(this.making=="Making per Tola"){
        this.making="Making per Piece";
      }else if(this.making="Making per Piece"){
        this.making="Making per Gram";
      }
      this.calculateMaking();
    }
    CalculatePureWeight(){
   
      this.purchaseService.purchase.PurcahseDetail.PureWeight =  Number(this.formulaService.calculatePureWeight(this.purchaseService.purchase.PurcahseDetail.Weight,this.purchaseService.purchase.PurcahseDetail.WastegePercent,this.purchaseService.purchase.PurcahseDetail.Purity));
    }
   
  
    calculateRate(){

console.log("this.purchaseService.purchase.PurcahseDetail.GoldPrice="+this.purchaseService.purchase.PurcahseDetail.GoldPrice)

      this.purchaseService.purchase.PurcahseDetail.GoldPrice = Number((Number(this.purchaseService.purchase.PurcahseDetail.ItemRate)*Number(   this.purchaseService.purchase.PurcahseDetail.PureWeight)).toFixed(3))
    }
    
    calculateMaking(){
    

      if(this.making=="Making per Gram"){
console.log("this.purchaseService.purchase.PurcahseDetail.TotalMaking="+this.purchaseService.purchase.PurcahseDetail.TotalMaking)
     
        this.purchaseService.purchase.PurcahseDetail.TotalMaking = Number((Number(this.purchaseService.purchase.PurcahseDetail.MakingType)* (Number(this.purchaseService.purchase.PurcahseDetail.Weight)+(Number(this.purchaseService.purchase.PurcahseDetail.WastegePercent)/100)*Number(this.purchaseService.purchase.PurcahseDetail.Weight))).toFixed(3));
 
      }else if(this.making=="Making per Tola"){
     
        this.purchaseService.purchase.PurcahseDetail.TotalMaking = Number((Number(this.purchaseService.purchase.PurcahseDetail.MakingType)* ((Number(this.purchaseService.purchase.PurcahseDetail.Weight)+(Number(this.purchaseService.purchase.PurcahseDetail.WastegePercent)/100)*Number(this.purchaseService.purchase.PurcahseDetail.Weight))/11.664)).toFixed(3));
  
      }else if(this.making="Making per Piece"){

    
      this.purchaseService.purchase.PurcahseDetail.TotalMaking = Number((Number(this.purchaseService.purchase.PurcahseDetail.MakingType)* (Number(this.purchaseService.purchase.PurcahseDetail.Quantity))).toFixed(3));

      }
    }
    total:0;
    flag_ItemId:boolean=false;
    flag_Weight:boolean=false;
    flag_WastePercent:boolean=false;
    flag_Karat:boolean=false;
    flag_Purity:boolean=false;
    flag_Quantity :boolean=false;
    flag_ItemRate:boolean=false;
    flag_GoldPrice:boolean=false;
    flag_TotalMaking:boolean=false;
    addProductDetail(){
     
   this.purchaseDetails =
   {
     ItemId  :  this.purchaseService.purchase.Items.ItemId,
     ItemName  :  this.purchaseService.purchase.Items.ItemName,
     Weight  : this.purchaseService.purchase.PurcahseDetail.Weight,
     WastePercent : this.purchaseService.purchase.PurcahseDetail.WastegePercent,
     Karat  :  this.purchaseService.purchase.PurcahseDetail.Karat,
     Purity  : this.purchaseService.purchase.PurcahseDetail.Purity,
     PureWeight :  this.purchaseService.purchase.PurcahseDetail.PureWeight,
     Quantity  : this.purchaseService.purchase.PurcahseDetail.Quantity,
     ItemRate  : this.purchaseService.purchase.PurcahseDetail.ItemRate,
     GoldPrice : this.purchaseService.purchase.PurcahseDetail.GoldPrice,
     TotalMaking : this.purchaseService.purchase.PurcahseDetail.TotalMaking,
     MakingType : this.purchaseService.purchase.PurcahseDetail.MakingType,
     Description : this.purchaseService.purchase.PurcahseDetail.Description,

   };
   console.log(this.purchaseDetails );
   this.myArry.push(this.purchaseDetails);
   this.purchaseService.purchase.TotalQty=Number(this.purchaseService.purchase.TotalQty)+Number(this.purchaseService.purchase.PurcahseDetail.Quantity);
   this.purchaseService.purchase.TotalWeight=Number(this.purchaseService.purchase.TotalWeight)+Number(this.purchaseService.purchase.PurcahseDetail.Weight);
   this.purchaseService.purchase.TotalPureWeight=Number(this.purchaseService.purchase.TotalPureWeight)+Number(this.purchaseService.purchase.PurcahseDetail.PureWeight);
   this.purchaseService.purchase.GoldPrice= Number(this.purchaseService.purchase.GoldPrice)+Number(this.purchaseService.purchase.PurcahseDetail.GoldPrice);
   this.purchaseService.purchase.TotalMaking=Number(this.purchaseService.purchase.TotalMaking)+Number(this.purchaseService.purchase.PurcahseDetail.TotalMaking);
   this.purchaseService.purchase.TotalPrice=Number(this.purchaseService.purchase.TotalPrice)+Number(this.purchaseService.purchase.PurcahseDetail.ItemRate);
 
   this.flag_Weight=false;
   this.flag_WastePercent=false;
   this.flag_Purity=false;
   this.flag_Quantity=false;
   this.flag_ItemRate=false;
   this.flag_GoldPrice=false;
   this.flag_TotalMaking=false;
    //this.resetPurchaseDetails();
  //  if(this.purchaseDetails.Weight>0&&this.purchaseDetails.WastePercent>0&&
  //   this.purchaseDetails.Purity>0&&this.purchaseDetails.Quantity>0&&
  //   this.purchaseDetails.ItemRate>0&&this.purchaseDetails.GoldPrice>0
  //   &&this.purchaseDetails.TotalMaking>0)
  //   {
  //     this.myArry.push(this.purchaseDetails);
  //     for (let entry of this.myArry) {
  //       console.log(entry); 
  //   }
    
  //   alert(JSON.stringify(this.myArry));
  //  this.purchaseService.purchase.TotalQty=Number(this.purchaseService.purchase.TotalQty)+Number(this.purchaseService.purchase.PurcahseDetail.Quantity);
  //  this.purchaseService.purchase.TotalWeight=Number(this.purchaseService.purchase.TotalWeight)+Number(this.purchaseService.purchase.PurcahseDetail.Weight);
  //  this.purchaseService.purchase.TotalPureWeight=Number(this.purchaseService.purchase.TotalPweight)+Number(this.purchaseService.purchase.PurcahseDetail.PureWeight);
  //  this.purchaseService.purchase.GoldPrice= Number(this.purchaseService.purchase.GoldPrice)+Number(this.purchaseService.purchase.PurcahseDetail.GoldPrice);
  //  this.purchaseService.purchase.TotalMaking=Number(this.purchaseService.purchase.TotalMaking)+Number(this.purchaseService.purchase.PurcahseDetail.TotalMaking);
  //  this.purchaseService.purchase.TotalPrice=Number(this.purchaseService.purchase.TotalPrice)+Number(this.purchaseService.purchase.PurcahseDetail.ItemRate);
 
  //  this.flag_Weight=false;
  //  this.flag_WastePercent=false;
  //  this.flag_Purity=false;
  //  this.flag_Quantity=false;
  //  this.flag_ItemRate=false;
  //  this.flag_GoldPrice=false;
  //  this.flag_TotalMaking=false;
  //   this.resetPurchaseDetails();

  //   }
  //   else
  //   {
  //     if(this.purchaseDetails.ItemId==' ')
  //     {
  //       this.flag_ItemId=true;
  //     }
  //     else
  //     {
  //       this.flag_ItemId=false;
  //     }
  //     if(this.purchaseDetails.Karat==' ')
  //     {
  //       this.flag_Karat=true;
  //     }
  //     else
  //     {
  //       this.flag_Karat=false;
  //     }
  //   if(this.purchaseDetails.Weight<1)
  //   {
  //     this.flag_Weight=true;
  //   }
  //   else
  //   {
  //      this.flag_Weight=false;

  //   }
  //   if(this.purchaseDetails.WastePercent<1)
  //   {
  //     this.flag_WastePercent=true;
  //   }
  //   else
  //   {
  //     this.flag_WastePercent=false;
  //   }
  //   if(this.purchaseDetails.Purity<1)
  //   {
  //     this.flag_Purity=true;
  //   }
  //   else
  //   {
  //     this.flag_Purity=false;
  //   }
    
  //   if(this.purchaseDetails.Quantity<1)
  //   {
  //     this.flag_Quantity=true;
  //   }
  //   else
  //   {
  //     this.flag_Quantity=false;
  //   }
  //   if(this.purchaseDetails.ItemRate<1)
  //   {
  //     this.flag_ItemRate=true;
  //   }
  //   else
  //   {
  //     this.flag_ItemRate=false;
  //   }
  //   if(this.purchaseDetails.GoldPrice<1)
  //   {
  //     this.flag_GoldPrice=true;
  //   }
  //   else
  //   {
  //     this.flag_GoldPrice=false;
  //   }
  //   if(this.purchaseDetails.TotalMaking<1)
  //   {
  //     this.flag_TotalMaking=true;
  //   }
  //   else
  //   {
  //     this.flag_TotalMaking=false;
  //   }
  // }
   
//  var res=  JSON.parse(this.purchaseDetail);
  

    
    }
  

    resetPurchaseDetails(){
  this.purchaseService.purchase.PurcahseDetail.ItemName = '';
      this.purchaseService.purchase.PurcahseDetail.Weight =0;
 this.purchaseService.purchase.PurcahseDetail.WastegePercent=0;
  this.purchaseService.purchase.PurcahseDetail.Karat='';
 
 this.purchaseService.purchase.PurcahseDetail.Purity=0;
   this.purchaseService.purchase.PurcahseDetail.PureWeight=0;
   this.purchaseService.purchase.PurcahseDetail.Quantity=1;
     this.purchaseService.purchase.PurcahseDetail.ItemRate=0;
      this.purchaseService.purchase.PurcahseDetail.GoldPrice=0;
    this.purchaseService.purchase.PurcahseDetail.MakingPerGram=0;
    this.purchaseService.purchase.PurcahseDetail.MakingType=0;
    this.purchaseService.purchase.PurcahseDetail.TotalMaking=0;

    }
    ondelete(item:any)
    { 
      // console.log("item : "+item);
      // console.log("item id : "+item.id);
      let index=this.myArry.indexOf(item);
      console.log(this.purchaseService.purchase.TotalQty);
      this.purchaseService.purchase.TotalQty= Number(this.purchaseService.purchase.TotalQty)-Number(item.Quantity);
      this.purchaseService.purchase.TotalWeight=Number(this.purchaseService.purchase.TotalWeight)-Number(item.Weight);
      this.purchaseService.purchase.TotalPureWeight=Number(this.purchaseService.purchase.TotalPureWeight)-Number(item.PureWeight);
      this.purchaseService.purchase.GoldPrice= Number(this.purchaseService.purchase.GoldPrice)-Number(item.GoldPrice);
      this.purchaseService.purchase.TotalMaking=Number(this.purchaseService.purchase.TotalMaking)-Number(item.TotalMaking);
      this.purchaseService.purchase.TotalPrice=Number(this.purchaseService.purchase.TotalPrice)-Number(item.ItemRate);
      this.myArry.splice(index, 1);
    }


 
  diable_check:boolean=false;
 
  // code cahnge 
  onRateCodeChange(event){
    this.purchaseService.getRateFix(event).subscribe(res => this.rateName = res as any);;
    }
    // onKaratChange(event){
    //         this.purchaseService.getStandardPurity(event).subscribe(res => this.standardPurity = res as any);;
    //       }
}


   

