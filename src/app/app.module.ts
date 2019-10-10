import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { UserService } from './shared/Services/Users/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { appRoutes } from './routes';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { AccountMasterComponent } from './account-master/account-master.component';
import { AccountService } from './shared/account.service';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSingupComponent } from './user-singup/user-singup.component';
import { TestimgpurposeComponent } from './testimgpurpose/testimgpurpose.component';
import { AccountListComponent } from './AccountMaster/account-list/account-list.component';
import { AccountMasterlistComponent } from './account-master/account-masterlist/account-masterlist.component';
// import { DataTablesModule } from 'angular-datatables';
import { NumberOnlyDirective } from './Directive/NumberOnlyDirective';
import { SalariesComponent } from './salaries/salaries.component';
import { SalaryserviceService } from './shared/salaryservice.service';
import { NavbarComponent } from './Component/navbar/navbar.component';

import { ItemService } from './shared/Services/Items/item.service';

import { MatrialModule } from './matrial/matrial.module';
// import { MatDialogModule} from '@angular/material';
import { CurrnecyMasterComponent } from './MaterForm/Currencymaster/currnecy-master/currnecy-master.component';
import { RateMasterListComponent } from './MaterForm/RateMaster/rate-master-list/rate-master-list.component';
import { CutcatmastreListComponent } from './MaterForm/CurrencyCategoryMaster/cutcatmastre-list/cutcatmastre-list.component';
import { TypeMastersListComponent } from './MaterForm/Typemaster/type-masters-list/type-masters-list.component';
import { KaratMastersListComponent } from './MaterForm/Karat/karat-masters-list/karat-masters-list.component';
import { RateMasterComponent } from './MaterForm/RateMaster/rate-master/rate-master.component';
import { CustomerCategoryMasterComponent } from './MaterForm/CurrencyCategoryMaster/customer-category-master/customer-category-master.component';
import { KaratMasterComponent } from './MaterForm/Karat/karat-master/karat-master.component';
import { TypeMasterComponent } from './MaterForm/Typemaster/type-master/type-master.component';
// import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
// import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
 import {NgxPaginationModule} from 'ngx-pagination';
import { PurchaseComponent } from './Purchase/purchase/purchase.component'; // <-- import the module
import { PurchaseService } from './shared/Purchaseservices/purchase.service';
// import { SelectDropDownModule } from 'ngx-select-dropdown'
import { TestoldComponent } from './testold/testold.component';
import { PurcahseDetailserviceService } from './shared/Purchaseservices/purcahse-detailservice.service';
import { FooterComponent } from './Component/footer/footer.component';
import { RateMasterService } from './shared/Services/Master_Form/rate-master.service';
import { KaratMasterService } from './shared/Services/Master_Form/karat-master.service';
import { CustomerCategoryMasterService } from './shared/Services/Master_Form/customer-category-master.service';
import { TypeMasterService } from './shared/Services/Master_Form/type-master.service';
import { CurrnecyMasterListComponent } from './MaterForm/Currencymaster/currnecy-master-list/currnecy-master-list.component';
import { StoneMasterComponent } from './Stone/stone-master/stone-master.component';
import { StoneSubMasterComponent } from './Stone/stone-sub-master/stone-sub-master.component';
import { TestComponent } from './test/test.component';
import { StonGridComponent } from './Purchase/ston-grid/ston-grid.component';
import { StoneService } from './shared/Services/Stone/stone.service';
import { StockComponent } from './Stock/stock/stock.component';
import { StockStonegridComponent } from './Stock/stock-stonegrid/stock-stonegrid.component';
import { RepComponent } from './rep/rep.component';
import { AccountTypeListComponent } from './AccountType/account-type-list/account-type-list.component';

import { AccountTypeComponent } from './AccountType/account-type/account-type.component';
import { ReportsComponent } from './Reports/reports/reports.component';
import { GoldRateComponent } from './GoldRate/gold-rate/gold-rate.component';
import { GoldRateListComponent } from './GoldRate/gold-rate-list/gold-rate-list.component';
import { GoldRateService } from './shared/Services/GoldRate/gold-rate.service';
import { PasaRateComponent } from './PasaRate/pasa-rate/pasa-rate.component';
import { PasaRateListComponent } from './PasaRate/pasa-rate-list/pasa-rate-list.component';
import { RattiMasterService } from './shared/Services/RattiMaster/ratti-master.service';
import { PasaRateService } from './shared/Services/PasaRate/pasa-rate.service';
import { RattiMasterComponent } from './RattiMaster/ratti-master/ratti-master.component';
import { RattiMasterListComponent } from './RattiMaster/ratti-master-list/ratti-master-list.component';

import { SubItemService } from './shared/Services/SubItem/sub-item.service';
import { ItemsComponent } from './Items/items/items.component';

import { ItemComponent } from './Items/Item/item/item.component';
import { ItemListComponent } from './Items/Item/item-list/item-list.component';
import { SubItemComponent } from './Items/SubItem/sub-item/sub-item.component';
import { SubItemListComponent } from './Items/SubItem/sub-item-list/sub-item-list.component';

import { GoldDetailComponent } from './GoldDetail/gold-detail/gold-detail.component';
import { DefaultSettingService } from './shared/Services/DefaultSettings/default-setting.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { AccountTypeService } from './shared/Services/Account/AccountType/account-type.service';
import { FormulaService } from './shared/Services/Helper/formula.service';
import { CurrencyTypeService } from './shared/Services/Master_Form/Currency-type.service';
// import { PaymentService } from './shared/Services/Payment/payment.service';
import { DatePipe } from '@angular/common';
import { BankService } from './shared/Services/Bank/bank.service';
import { BankAccountHolderService } from './shared/Services/BankAccountHolder/bank-account-holder.service';
import { PaymentService } from './shared/Services/Payment/payment.service';
 //import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserComponent,
    SignInComponent,
    HomeComponent,
    AdminPanelComponent,
    ForbiddenComponent,
    LayoutsComponent,
    AdminLayoutComponent,
    AccountMasterComponent,
    UserLoginComponent,
    UserSingupComponent,
    FooterComponent,
    TestimgpurposeComponent,
    AccountListComponent,
    AccountMasterlistComponent,
    NumberOnlyDirective,
    SalariesComponent,
    NavbarComponent,
    TypeMasterComponent,
    KaratMasterComponent,
    CustomerCategoryMasterComponent,
    CurrnecyMasterComponent,
    RateMasterComponent,
    KaratMastersListComponent,
    CurrnecyMasterListComponent,
    TypeMastersListComponent,
    CutcatmastreListComponent,
    RateMasterListComponent,
    PurchaseComponent,
    TestoldComponent,
    StoneMasterComponent,
    StoneSubMasterComponent,
    TestComponent,
    StonGridComponent,
    StockComponent,
    StockStonegridComponent,
    RepComponent,
    AccountTypeComponent,
    AccountTypeListComponent,
    ReportsComponent,
    GoldRateComponent,
    GoldRateListComponent,
    PasaRateComponent,
    PasaRateListComponent,
    RattiMasterComponent,
    RattiMasterListComponent,
    ItemsComponent,
    SubItemComponent,
    SubItemListComponent,
    // ItemsComponent,
    ItemComponent,
    ItemListComponent,
 
    GoldDetailComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    //NgbModule.forRoot(),
    // // SelectDropDownModule,
    HttpClientModule,
    // // DataTablesModule,
 ToastrModule.forRoot(),
    BrowserAnimationsModule,
    // NgSelectModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  MatrialModule,
  
    // // Ng2SearchPipeModule, //including into imports
    // // Ng2OrderModule, // importing the sorting package here
    NgxPaginationModule,
   
  ],
  providers: [UserService, AccountService ,SalaryserviceService,ItemService 
    ,AuthGuard,CurrencyTypeService , RateMasterService,KaratMasterService,CustomerCategoryMasterService
    ,TypeMasterService, PurchaseService,StoneService,
    ,GoldRateService,RattiMasterService,PasaRateService,SubItemService,DefaultSettingService,AccountTypeService,
   ,FormulaService,PaymentService,DatePipe,BankService,BankAccountHolderService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent],
  entryComponents:[GoldDetailComponent]
})
export class AppModule { }



