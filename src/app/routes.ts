// import { AsapAction } from 'rxjs/src/scheduler/AsapAction';
import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AccountMasterComponent } from './account-master/account-master.component';

import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { TestimgpurposeComponent } from './testimgpurpose/testimgpurpose.component';
import { UserSingupComponent } from './user-singup/user-singup.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { AccountListComponent } from './AccountMaster/account-list/account-list.component';

import { SalariesComponent } from './salaries/salaries.component';

import { RateMasterComponent } from './MaterForm/RateMaster/rate-master/rate-master.component';
import { KaratMasterComponent } from './MaterForm/Karat/karat-master/karat-master.component';
import { CustomerCategoryMasterComponent } from './MaterForm/CurrencyCategoryMaster/customer-category-master/customer-category-master.component';
import { CurrnecyMasterComponent } from './MaterForm/Currencymaster/currnecy-master/currnecy-master.component';
import { TypeMasterComponent } from './MaterForm/Typemaster/type-master/type-master.component';
import { PurchaseComponent } from './Purchase/purchase/purchase.component';
import { TestoldComponent } from './testold/testold.component';
import { StonGridComponent } from './Purchase/ston-grid/ston-grid.component';
import { StockComponent } from './Stock/stock/stock.component';
import { StockStonegridComponent } from './Stock/stock-stonegrid/stock-stonegrid.component';
// import { RepComponent } from './rep/rep.component';
import { AccountTypeComponent } from './AccountType/account-type/account-type.component';
import { ReportsComponent } from './Reports/reports/reports.component';
import { GoldRateComponent } from './GoldRate/gold-rate/gold-rate.component';
import { RattiMasterComponent } from './RattiMaster/ratti-master/ratti-master.component';
import { PasaRateComponent } from './PasaRate/pasa-rate/pasa-rate.component';
import { ItemsComponent } from './Items/items/items.component';
import { TestComponent } from './test/test.component';



export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
    { path: 'account', component: AccountMasterComponent},
    { path: 'login', component: UserLoginComponent},
    { path: 'test', component: TestComponent},
    { path: 'singup', component: UserSingupComponent},
    { path: 'main', component: LayoutsComponent},
    { path: 'accountlist', component: AccountListComponent},
    { path: 'forbidden', component: ForbiddenComponent, canActivate: [AuthGuard] },
    { path: 'adminPanel', component: AdminPanelComponent, canActivate: [AuthGuard] , data: { roles: ['Admin'] }},
    {
        path: 'signups', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'logins', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path : '', redirectTo:'/login', pathMatch : 'full'},
    {path :'salary' ,component :SalariesComponent},
 
    
    {path :'typemaster' ,component :TypeMasterComponent},
    {path :'items' ,component :ItemsComponent},

    {path :'currnecymaster' ,component :CurrnecyMasterComponent},
    {path :'customercategorymaster' ,component :CustomerCategoryMasterComponent},
    {path :'karatmaster' ,component :KaratMasterComponent},
    {path :'ratemaster' ,component :RateMasterComponent},
    {path :'purchase' ,component :PurchaseComponent},
    {path :'Testold' ,component :TestoldComponent},
    {path :'stone' ,component :StonGridComponent},
    {path :'stock' ,component :StockComponent},
    // {path :'stonGrid' ,component :StockStonegridComponent},
    {path:  'account-type', component:AccountTypeComponent},
    {path:  'reports', component:ReportsComponent},
    {path:  'goldrate', component:GoldRateComponent},
    {path:  'ratti', component:RattiMasterComponent},
    {path:  'pasarate', component:PasaRateComponent},
    






];
