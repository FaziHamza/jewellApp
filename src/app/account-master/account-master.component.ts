import { Component, OnInit } from '@angular/core';
import { FormGroup ,Validators, NgForm } from '@angular/forms';
import { AccountService } from '../shared/account.service';
import { ToastrService } from 'ngx-toastr'
import { HeadAccount } from '../shared/Models/HeadAccount/head-account.model';
import { AccountType } from '../shared/Models/Account_Type/account-type.model';

declare var $;
@Component({
  selector: 'app-account-master',
  templateUrl: './account-master.component.html',
  styleUrls: ['./account-master.component.css']
})

export class AccountMasterComponent implements OnInit {
 // account: AddAccount;
  constructor(public accountService: AccountService , public toastr: ToastrService) {  
  }
  accountlist : any[];
  countrylist : any[];
  
  curencylist : any[];
  citylist : any[];
  accountTypeDrop:AccountType;
  ngOnInit() {

    $(document).ready(function(){

//   $("#name1").keypress(function() {
//     var getname = $( "#name1" ).val();
//     if(getname!=' '){
//        table.search($(this).val()).draw() ;
//     }else{
//      table.search($(this).val('')).draw() ; 
//     }
// });
//   $("#name1").blur(function(){
  
//      table.search(' ').draw() ; 
//  console.log(' automatically');

    
// });
  
} );

    this.resetForm();
    this.accountService.getAllAccounts();
    this.accountService.getAccount();
    this.accountService.getCountries().subscribe(res => this.countrylist = res as any[]);
    this.accountService.getAccountType().subscribe(res => {
      this.accountlist = res as any[];
    });
    this.accountService.getCurency().subscribe(res => {
      this.curencylist = res as any[];
    });
  }
  accountType  : any[];
  formData = [];
  total =0;
  mTotal =0;
  gBlance ="Receivable";
  cBlance ="Receivable";
  accttypeName ='';
  public phonoList =[];
  public mobileList= [];
 
  phoneDatalist= [];

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
      this.total=0;
    this.accountService.account = 
    {
      Name : '',
      LastName : '',
      Reference: '',
      ChildCode: '',
      HeadCode: '',
      Address: '',
      AccountType: '',
      Type: '',
      Country: '', 
      City: 0,
      State: '',
      CuranceyId: 0,
      AccountCode : 0,
      GoldBlance: 0,
      CashBlance: 0,
      Email :'' ,
      ShopId:0,
      cbvalue:0,
      gbvalue:0,
      House:'',
      Block:'',
      Street:'',
      Near:'',
      CityName:'',
      MobileNos:[],
      PhoneNos:[],
      AccountTypeId:'',
      AccountTypes:null,
   


    }
  }
  addType(AccountType:string)
  {
  
    if(confirm('Are You Sure to want to add this  Record ?'))
    {
     // alert(AccountType);
      this.accountService.accoutType(AccountType)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
         // this.toastr.success('Account Type successful save.');
        this.accountService.getAllAccounts(); 
        }
        else
          this.toastr.error(data.Errors[0]);
      });
      this.accountService.getAccountType().subscribe(res => {
        this.accountlist = res as any[];
      });
    }
}

  addValue(newValue: any) {

    if(this.phonoList.length == 0)
    {
      this.phonoList.push(newValue.trim());
      this.total = this.phonoList.length ;
     
    }
    if(this.phonoList.length > 0){
        if ( this.phonoList.includes(newValue) !== true) {
          this.phonoList.push(newValue.trim());
          this.total = this.phonoList.length ;
          // alert('i have added to list')
         
        }
        if(this.phonoList.includes(newValue)===newValue){
          // alert('hou have already added this value ')
        
      }        
    }           
  } 


  delphno(newValue :any){
    
    for( var i = 0; i < this.phonoList.length; i++){ 
      if ( this.phonoList[i] === newValue.trim()) {
        this.phonoList.splice(i, 1); 
      }
    }  
       this.total = this.phonoList.length ;
  }

  addmobeile(newValue1: any) {

    if(this.mobileList.length == 0){
      this.mobileList.push(newValue1.trim());
      this.mTotal = this.mobileList.length ;
     
    }
    if(this.mobileList.length > 0){
        if ( this.mobileList.includes(newValue1) !== true) {
          this.mobileList.push(newValue1.trim());
          this.mTotal = this.mobileList.length ;
          // alert('i have added to list')
         
        }
        if(this.mobileList.includes(newValue1)===newValue1){
          // alert('hou have already added this value ')
      }        
    }           
  }
  delmobeile(newValue1 :any){
    
    for( var i = 0; i < this.mobileList.length; i++){ 
      if ( this.mobileList[i] === newValue1.trim()) {
        this.mobileList.splice(i, 1); 
      }
    }  
       this.mTotal = this.mobileList.length ;
  }

  OnSubmit(form: NgForm) {

    
    this.accountService.account.AccountTypes =JSON.parse(this.accountService.account.AccountTypeId);
    // alert(this.accountService.account.AccountTypes) ;
    // alert(JSON.stringify(form.value));
   this.accountService.account.MobileNos = this.mobileList;
  //  for (let i = 0; i < 7; i++) {
  //   this.accountService.account.AccountTypes
  // }
   alert( this.accountService.account.AccountTypes);
    this.accountService.accountSaving(form.value,this.accountService.account.AccountTypes)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
         // this.resetForm(form);
         // this.toastr.success('Account  successful save.');
    this.accountService.getAllAccounts(); 
        }
        else
          this.toastr.error(data.Errors[0]);
      });
     // this.resetForm(form);
        //  this.toastr.success('Account  successful save.');
    this.accountService.getAllAccounts();
         
  }
BtnEdit()
{
  this.toastr.warning('we will back ASAP.','Opps!');
}
BtnDelete()
{
  this.toastr.warning('we will back ASAP.','Opps!');
}
// Fromt End Controll by custom code
gBlanceset(){
  // alert(this.gBlance=="Receivable");
  // this.gBlance ="Payable";
  if(this.gBlance=="Receivable"){
    this.gBlance ="Payable";
    this.accountService.account.GoldBlance =-(this.accountService.account.gbvalue);
  }
  else if(this.gBlance=="Payable"){
    this.gBlance ="Receivable";
    this.accountService.account.GoldBlance =+(this.accountService.account.gbvalue);
  }
  
}
cBlanceset(){
  // alert(this.gBlance=="Receivable");
  // this.gBlance ="Payable";
    if(this.cBlance=="Receivable"){
    this.cBlance ="Payable";
    this.accountService.account.CashBlance=-(this.accountService.account.cbvalue);

  }
  else if(this.cBlance=="Payable"){
    this.cBlance ="Receivable";
    this.accountService.account.CashBlance=+(this.accountService.account.cbvalue);
  }
}
//city cahnge
onAccountChange(event){
this.accountService.getCity(event).subscribe(res => this.citylist = res as any[]);;
}
values = '';
onKeyPress(event: any){
  this.values = event.target.value;
   $("input[aria-controls=dataTable1]").val('message');
   var table = $('#dataTable1').DataTable();
   table.search('as').draw() ;
}
onbuluer(){

  var table = $('#dataTable1').DataTable();
  table.search(' ').draw() ; 
}
onTypeChange(account){
  alert(account);
  this.accttypeName = this.accountService.account.AccountType;
  
}
onCityChange(account)
{

}
dropchange(city:any){
this.accountTypeDrop = city.target.value;
  // alert(this.accountTypeDrop );

}
onValueVhange(){
 // alert((this.accountlist));
  console.log(JSON.stringify(this.accountlist))
}
}
