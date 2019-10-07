import { Component, OnInit } from '@angular/core';
import { DefaultSettingService } from '../../shared/Services/DefaultSettings/default-setting.service';
import { DefaultSetting } from '../../shared/Models/DefaultSetting/DefaultSetting';
import { Item } from '../../shared/Models/Item/item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(  public defaultSettingService: DefaultSettingService) { }

  ngOnInit() {
    this.defaultSettingService.getDefaultSettingSubscrption().subscribe(res => {
      this.defaultSettingService.defaultSetting = res as DefaultSetting;
   
      if(this.defaultSettingService.defaultSetting.Origin=="Pakistan"){
        this.defaultSettingService.readonly =true;
        
      }
        else
        {
       
        
          
          
        }

  
    });
  }

}
