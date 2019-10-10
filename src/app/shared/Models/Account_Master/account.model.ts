import { AccountType } from '../Account_Type/account-type.model';

export class AccountMaster {
     Name :string;
     LastName :string;
     
     Reference :string;
      ChildCode :string
      HeadCode :string
      Address :string
      AccountType :string
      Type :string;
      Country :string;
      City : number;
      State :string; 
      CuranceyId :number;
      AccountCode :number;    
      GoldBlance:number;
      CashBlance :number;
      Email :string;
      ShopId:number;
      gbvalue:number;
      cbvalue :number;
      House :String;
      Block :String;
      Street :String;
      Near :String;
      CityName:string;
      MobileNos:string[];
      PhoneNos:string[];     
      AccountTypeId:string;
      AccountTypes: AccountType;
     
 }