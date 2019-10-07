import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimgpurpose',
  templateUrl: './testimgpurpose.component.html',
  styleUrls: ['./testimgpurpose.component.css']
})
export class TestimgpurposeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  total =0;
  newValue ='';
  phonoList = [];
  phoneDatalist= [];
  addValue(newValue: any) {
    alert("ss");
    if(this.phonoList.length == 0){
      this.phonoList.push(newValue.trim());
      this.total = this.phonoList.length ;
    }
    if(this.phonoList.length > 0){
        if ( this.phonoList.includes(newValue) !== true) {
          this.phonoList.push(newValue.trim());
          this.total = this.phonoList.length ;
          // alert('i have added to list')
        }
        if(this.phonoList.includes(newValue)===newValue){
          alert('hou have already added this value ')
      }        
    }           
  } 

}
