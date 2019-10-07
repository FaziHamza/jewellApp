import { Injectable } from '@angular/core';
import { Formula } from '../../Helper/Formula';
import { DefaultSetting } from '../../Models/DefaultSetting/DefaultSetting';
import { DefaultSettingService } from '../DefaultSettings/default-setting.service';
import { AppSettting } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {
  defaultSetting :DefaultSetting;
  fixedPoint:number=3;
  formula:Formula;
  constructor(public defaultSettingService:DefaultSettingService) { }

   calculatePureWeight(netweight:number,wasteage:number,purity:number): number{
    var res ;
    if(AppSettting.Origin=="Pakistan"){
      if(wasteage>0){
        var wastagecal = Number((wasteage/100.00)*netweight);
        res= Number((Number(96-Number(purity))/96)*(Number(netweight)+Number(wastagecal))).toFixed(this.fixedPoint);

      }else{
        res= Number((Number(96-Number(purity))/96)*Number(netweight)).toFixed(this.fixedPoint);

      }
      // res= Number((Number(96-Number(purity))/96)*Number(netweight)).toFixed(this.fixedPoint);

     }
  
    return res;
    } 
}
