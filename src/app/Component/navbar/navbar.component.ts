import { Component, OnInit } from '@angular/core';
import { DefaultSettingService } from 'src/app/shared/Services/DefaultSettings/default-setting.service';
import { DefaultSetting } from 'src/app/shared/Models/DefaultSetting/DefaultSetting';
import { environment, AppSettting } from 'src/environments/environment.prod';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  constructor(public defaultSettingService:DefaultSettingService) {
    let defaultSetting = new DefaultSetting();
    defaultSettingService.defaultSetting = defaultSetting;
   }

  ngOnInit() {
    if(AppSettting.Origin==""){
      alert()
      this.defaultSettingService.getDefaultSettingSubscrption().subscribe(res => {
        this.defaultSettingService.defaultSetting = res as any;
        AppSettting.Origin= this.defaultSettingService.defaultSetting.Origin;
      
        });
    }

      
  }
  btnclick(){
    alert("Fazi");
  }

}
