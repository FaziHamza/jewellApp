import { GoldRates } from 'src/app/shared/Models/GoldRate/gold-rate.model';

export const environment = {
  production: true,
  rootApiUrl : 'http://localhost:35257',
};
export const AppSettting=
{
    Origin: '',
    ToFixed:0,
    GoldRates:new GoldRates()
}

export const Controllers=
{
  GoldRate :"/api/goldRate/",
  Sale:"/api/sale/",
  AccountType:"/api/accountType/",
  Purchase:"/api/purchase/",
  CurrencyType:"/api/currencyType/",
  Banks:"/api/Banks/",
  BankAccountHolders:"/api/bankAccountHolders/"


}
