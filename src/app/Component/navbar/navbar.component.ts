import { Component, OnInit } from '@angular/core';
import { DefaultSettingService } from 'src/app/shared/Services/DefaultSettings/default-setting.service';
import { DefaultSetting } from 'src/app/shared/Models/DefaultSetting/DefaultSetting';
import { environment, AppSettting } from 'src/environments/environment.prod';
import { GoldRateService } from 'src/app/shared/Services/GoldRate/gold-rate.service';
import { GoldRates } from 'src/app/shared/Models/GoldRate/gold-rate.model';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  constructor(public defaultSettingService:DefaultSettingService,public goldRateService: GoldRateService) {
    let defaultSetting = new DefaultSetting();
    defaultSettingService.defaultSetting = defaultSetting;
   }

  ngOnInit() {
    if(AppSettting.Origin==""){
      // alert()
      this.defaultSettingService.getDefaultSettingSubscrption().subscribe(res => {
        this.defaultSettingService.defaultSetting = res as any;
        AppSettting.Origin= this.defaultSettingService.defaultSetting.Origin;
      
        });
       
          this.goldRateService.getGoldRateSubscribe().subscribe(res => {
            AppSettting.GoldRates = res as GoldRates;
            });
      
        
       
         
    }

      
  }
  btnclick(){
    alert("Fazi");
  }

}
