import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { KaratMasterService } from '../../../shared/Services/Master_Form/karat-master.service';
import { KaratMaster } from '../../../shared/Models/Master_Form/karat-master.model';
declare var $;

@Component({
  selector: 'app-karat-master',
  templateUrl: './karat-master.component.html',
  styleUrls: ['./karat-master.component.css']
})
export class KaratMasterComponent implements OnInit {
  // karatmaster: KaratMaster;

  constructor(public karatservices :KaratMasterService ,public toastr: ToastrService) { }
  title = 'Jewellery Manger ';
  keycode ='ss222';
  myHero ='2';
  update =0;
  ngOnInit() {
    this.resetForm();
    this.keycode = this.karatservices.karatmaster.KaratCode;
  }
  
  
  resetForm(form? : NgForm): any {
    if(form!=null)
      form.reset();
      this.karatservices.karatmaster ={
        KaratCode :'',
        Description :'',
        StandredPurity:0,
        KaratMasterId:0,
      }
    }
    OnSubmit(form: NgForm) {
      this.update =form.value.KaratMasterId;
      this.karatservices.AddKarat(form.value)
      .subscribe((data: any) => {
        if (data =="Succfull") {
         // this.resetForm(form);
        if(  this.update ==0 ){
          this.toastr.success('Account  Successfully Save', 'Successfully', {
            timeOut: 3000
          });
        }else{
          this.toastr.warning('Account  Successfully Updated', 'Updated', {
            timeOut: 3000
          });
        }
       
   this.karatservices.getkarat(); 
        }
        else
          this.toastr.error(data.Errors[0]);
      });
        this.resetForm(form);   
     // alert(JSON.stringify(form.value)));
       };
       onKeyPress(event: any){
    this.myHero = this.karatservices.karatmaster.KaratCode;
          // this.requests = this.requests.filter(request => request.requestedBy === '*');
      }

      inserData(form: NgForm){
  
      }
}
