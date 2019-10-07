import { Component, OnInit, Renderer2, ViewChild, EventEmitter, Output ,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import {StockStonegridComponent} from '../stock-stonegrid/stock-stonegrid.component'
import { StockService } from 'src/app/shared/Services/Stock/stock.service';
import { ToastrService } from 'ngx-toastr';
import { AppSettting } from 'src/environments/environment.prod';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { GoldDetailComponent } from 'src/app/GoldDetail/gold-detail/gold-detail.component';
import { DefaultSettingService } from 'src/app/shared/Services/DefaultSettings/default-setting.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  @ViewChild("image" , {static: false}) private image: ElementRef;
  @Output() close = new EventEmitter();
  @ViewChild(StockStonegridComponent,{static:false}) child :StockStonegridComponent;
  StockFrom:FormGroup;
  error: string;
  uploadError: string;
  isPicBoxShow :boolean= true;
  boxCount :number=0;
  imageDetails;
  imageArray =[];
  constructor(private formBuilder:FormBuilder,
    private stockService: StockService,
    private renderer: Renderer2,
    public toastr: ToastrService, 
    public defaultSettingService:DefaultSettingService,
    public dialog: MatDialog,
    ) { }
  isShow:boolean =false;
 
  ngOnInit() {
    this.resetForm();
 
    console.log("hello");
    // console.log(this.child.sellingPoints.value);
 
  }
  resetForm(form? : NgForm): any {
    if(form!=null)
      form.reset();
      this.stockService.stock ={
        StockId:0,
        TagNo :'',
        BarCode:'',
        ItemId:0,
        Items:null,
        NetWeight:0,
        WastePerGm:0,
        WastePercent:0,
        TotalWeight:0,
        ItemSize:'',
        Qty:0,
        Pieces:0,
        Karat:'',
        Description:'',
        StockDate:'',
        AccountMasters:null,
        LakerPerGm:0,
        TotalLaker:0,
        RatePerGm:0,
        MakingPerGm:0,

        MakingPerTola:0,
        TotalMaking:0,
        TotalPrice:0,
        RateA:0,
        PriceA:0,
        RateD:0,
        PriceD:0,
        SilverSalePrice:0,
        MakingType:'',
        Status:'',
        OrderNo:0,

        OItemId:'',
        OtherCharges:0,
        SaleDate:'',
        DelDate:'',
        DamDate:'',
        IndexNo:0,
        PStatus:0,
        UserId:0,
        lineItems:null,
        DesignId :0,
        ItemType:'',
        WorkerId:0,
        Images:null

      }
    }
  checkItemTypeStatus(name:any){
   var itemName =name.target.value;
    if(itemName=="Gold" ||itemName=="Diamond" ||itemName=="Pladium" ||itemName=="Plantium"  ){
      this.isShow=false;   
    }else{
      this.isShow=true;
    }
  }
  getvalue(){
    this.child.addSellingPoint();
    
    // console.log("parent " +this.child.dispdisp());

  }
  save()
  {
    this.child.save();
    
  }
  deleteProductImage(filename, a) {
    const formData = new FormData();
    formData.append('filename', filename);
    this.stockService.deleteImage(formData).subscribe(
      res => {
        a.parentElement.remove();
        // let index=this.imageArray.indexOf(filename);
        // this.imageArray.splice(index, 1);
      },
      err => this.error = err
    );

    // this.boxCount =this.boxCount-1; 
    // if(this.boxCount==3){
    //   this.isPicBoxShow=false;
    // }else{
    //   this.isPicBoxShow=true;
    // }
    
  }
  onSelectedFile(event) {
    if(this.boxCount==2){
      this.isPicBoxShow=false;
    }else{
      this.isPicBoxShow=true;
    }
    if (event.target.files.length > 0) {
      const productImage = event.target.files[0];

      const formData = new FormData();
      formData.append('productImage', productImage);
      this.stockService.uploadImage(formData).subscribe(
        res => {
          if (res.status === 200 && res.response.status === 'success') {
            this.uploadError = '';

            const li: HTMLLIElement = this.renderer.createElement('li');

            const img: HTMLImageElement = this.renderer.createElement('img');
            img.src = res.response.imagePath;
            this.renderer.addClass(img, 'product-image');

            const a: HTMLAnchorElement = this.renderer.createElement('a');
            a.innerText = 'Delete';
            this.renderer.addClass(a, 'delete-btn');
            a.addEventListener('click', this.deleteProductImage.bind(this, res.response.filename, a));

            this.renderer.appendChild(this.image.nativeElement, li);
            this.renderer.appendChild(li, img);
            this.renderer.appendChild(li, a);
            this.boxCount +=1; 
          this.imageDetails={
            ImageName :res.response.filename
          }
          this.imageArray.push(this.imageDetails);
          
          } else {
            this.uploadError = res.response.message;
          }
        },
        err => this.error = err
      );
    }
  }
  goldDetailPop(link){
    if(AppSettting.Origin=="Pakistan"){
      this.defaultSettingService.readonly =true;
    }
      else
      {
        this.defaultSettingService.readonly =false;
      }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    dialogConfig.height = "80%";

    this.dialog.open(GoldDetailComponent,dialogConfig);
  }
  OnSubmit(form: NgForm) {
    this.stockService.stock.Images = this.imageArray;
    this.stockService.addStock(form.value,this.stockService.stock.Images)
    .subscribe((data: any) => {
      if (data =="Succfull") {
        this.toastr.success('Account  Successfully Save', 'Successfully', {
          timeOut: 3000
        });
      }
    });
      this.resetForm(form);   
   // alert(JSON.stringify(form.value)));
     };

}
