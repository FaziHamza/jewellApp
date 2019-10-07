import { Component, OnInit ,ViewChild} from '@angular/core';
import { KaratMasterService } from '../../../shared/Services/Master_Form/karat-master.service';
import { KaratMaster } from '../../../shared/Models/Master_Form/karat-master.model';
import { NgForm } from '@angular/forms';
import { KaratMasterComponent } from '../karat-master/karat-master.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-karat-masters-list',
  templateUrl: './karat-masters-list.component.html',
  styleUrls: ['./karat-masters-list.component.css']
})
export class KaratMastersListComponent implements OnInit {
  @ViewChild(KaratMasterComponent,{static: false}) parent;
  constructor(public karatservices :KaratMasterService ,public toastr: ToastrService ) { }
  message:string;
  message1:'222';
  ngOnInit() {
    this.karatservices.getkarat();
    this.message = this.parent.myHero;
  }
  edit(karatmasterobj: KaratMaster) {

    this.karatservices.karatmaster = Object.assign({}, karatmasterobj);
  }
  delete(id:number){
    if(confirm('Are your sure you delete this record.?')){
      this.karatservices.delete(id)
    .subscribe((data: any) => {
      if (data =="Succfull") {
       // this.resetForm(form);
     
        this.toastr.success('Karat  Successfully Save', 'Delete', {
          timeOut: 3000
        });
        //update list
        this.karatservices.getkarat(); 
      }});
    }}



  key: string = 'name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;
}
