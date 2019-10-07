import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators,FormArray } from '@angular/forms';
import { StoneService } from '../../shared/Services/Stone/stone.service';
@Component({
  selector: 'app-ston-grid',
  templateUrl: './ston-grid.component.html',
  styleUrls: ['./ston-grid.component.css']
})
export class StonGridComponent implements OnInit {
  stoneForm: FormGroup;
    submitted = false;
  getStoneList:any[];
  stoneArray=[];
  stoneDetails;
  constructor(private formBuilder: FormBuilder, private stoneService :StoneService ) { }

  ngOnInit() {
    this.stoneService.getStoneList().subscribe(res => {
      this.getStoneList = res as any[];
      
    });
    this.restStoneGrid();
   /* Initiate the form structure */
   
  }
  restStoneGrid(){
    this.stoneForm = this.formBuilder.group({
   
      StoneType: [''],
      Weight: ['', Validators.required],
      Qty: ['', [Validators.required]],
      Rate: ['', [Validators.required]],
      Price: ['0', [Validators.required]],


  });
  }
   // code

  
  calculatePrice(){
    

    this.stoneForm.value.Price = Number(this.stoneForm.value.Qty)*Number(this.stoneForm.value.Rate);
    this.stoneForm.controls.Price.setValue(this.stoneForm.value.Price );
  }
  addStoneDetail(){


    this.stoneDetails =
    {
      Weight  :  this.stoneForm.value.Weight,
      Rate  :  this.stoneForm.value.Rate,
      Qty  : this.stoneForm.value.Qty,
      Price : this.stoneForm.value.Price,
      StoneType  : this.stoneForm.value.StoneType,
    };
    this.restStoneGrid();

    this.stoneArray.push(this.stoneDetails);
  }
  ondelete(item:any)
  { 
    // console.log("item : "+item);
    // console.log("item id : "+item.id);
    let index=this.stoneArray.indexOf(item);
    this.stoneArray.splice(index, 1);
    }

  /////// This is new /////////////////
 
  id_check=0;
  flag_save:boolean=false;
  flag_Weight:boolean=false;
  flag_Qty:boolean=false;
  flag_Rate:boolean=false;
  flag_Price:boolean=false;

  
}
