import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators,FormArray } from '@angular/forms';
import {StockDynamicControl,SellingPoint} from './stockStonemodel';
import { StoneService } from '../../shared/Services/Stone/stone.service';
@Component({
  selector: 'app-stock-stonegrid',
  templateUrl: './stock-stonegrid.component.html',
  styleUrls: ['./stock-stonegrid.component.css']
})
export class StockStonegridComponent implements OnInit {
  StockGrideFrom: FormGroup;
  
  constructor(private fb: FormBuilder ) { }

  ngOnInit() {
    // console.log(this.sellingPoints.value[0]);
    
   /* Initiate the form structure */
    this.StockGrideFrom = this.fb.group({
    
      StockGrideArray: this.fb.array([this.fb.group({type:'',Name:'',Weight:'',Qty:'',Rate:'',Price:''})])
     });
  }
   //usman code
   get sellingPoints() {
    return this.StockGrideFrom.get('StockGrideArray') as FormArray;
  }
  
  /////// This is new /////////////////
  myarray=[];
  id_check=0;
  flag_save:boolean=false;
  flag_Weight:boolean=false;
  flag_Qty:boolean=false;
  flag_Rate:boolean=false;
  flag_Price:boolean=false;
  addSellingPoint() {
    if(this.sellingPoints.value[this.id_check].Weight>0
      &&this.sellingPoints.value[this.id_check].Qty>0
      && this.sellingPoints.value[this.id_check].Rate>0
      &&this.sellingPoints.value[this.id_check].Price>0)
    {
      this.sellingPoints.push(this.fb.group({type:'',Name:'',Weight:'',Qty:'',Rate:'',Price:''}));
    console.log("hello",this.sellingPoints.value[0].Weight);
      this.flag_save=true;
      this.flag_Weight=false;
      this.flag_Qty=false;
      this.flag_Rate=false;
      this.flag_Price=false;
    }
    else
    {
      if(this.sellingPoints.value[this.id_check].Weight<1)
      {
        this.flag_Weight=true;
      }
      else
      {
        this.flag_Weight=false;
      }
      if(this.sellingPoints.value[this.id_check].Qty<1)
      {
        this.flag_Qty=true;
      }
      else
      {
        this.flag_Qty=false;
      }
      if(this.sellingPoints.value[this.id_check].Rate<1)
      {
        this.flag_Rate=true;
      }
      else
      {
        this.flag_Rate=false;
      }
      if(this.sellingPoints.value[this.id_check].Price<1)
      {
        this.flag_Price=true;
      }
      else
      {
        this.flag_Price=false;
      }
    }
    
   
  }

  deleteSellingPoint(index) {
    this.sellingPoints.removeAt(index);
    this.myarray.splice(index,1);
    console.log(this.myarray);
  } 

  save()
  {
    
    if(this.flag_save==true)
    {
      console.log("yes");
      for(let z=0;z<=this.myarray.length;z++)
      {
         this.myarray.pop();
      }
      this.myarray.splice(0,1);
      for(let j=0;j<this.sellingPoints.length;j++)
      {
         this.myarray.push(this.sellingPoints.value[j]);
      }
    console.log("chide",this.myarray);
    }
    else
    {
      if(this.sellingPoints.value[this.id_check].Weight<1)
      {
        this.flag_Weight=true;
      }
      else
      {
        this.flag_Weight=false;
      }
      if(this.sellingPoints.value[this.id_check].Qty<1)
      {
        this.flag_Qty=true;
      }
      else
      {
        this.flag_Qty=false;
      }
      if(this.sellingPoints.value[this.id_check].Rate<1)
      {
        this.flag_Rate=true;
      }
      else
      {
        this.flag_Rate=false;
      }
      if(this.sellingPoints.value[this.id_check].Price<1)
      {
        this.flag_Price=true;
      }
      else
      {
        this.flag_Price=false;
      }
    }
     
  }

}


