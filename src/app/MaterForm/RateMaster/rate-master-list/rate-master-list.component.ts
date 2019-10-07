import { Component, OnInit } from '@angular/core';
import { RateMasterService } from '../../../shared/Services/Master_Form/rate-master.service';
import { ToastrService } from 'ngx-toastr';
import { RateMasterTypeVm } from '../../../shared/viewmodel/rate-master-type-vm.model';
import { RateMaster } from '../../../shared/Models/Master_Form/rate-master.model';
@Component({
  selector: 'app-rate-master-list',
  templateUrl: './rate-master-list.component.html',
  styleUrls: ['./rate-master-list.component.css']
})
export class RateMasterListComponent implements OnInit {

  constructor(public ratemasterservice : RateMasterService ,public toastr: ToastrService  ) { }

  ngOnInit() {
    this.ratemasterservice.getRateMaster();
  }
  edit(RateMasterobj: RateMaster) {

    this.ratemasterservice.rateMaster = Object.assign({}, RateMasterobj);
  }
  delete(id:number){

    if(confirm('Are your sure you delete this record.?')){
      this.ratemasterservice.delete(id)
    .subscribe((data: any) => {
      if (data =="Succfull") {
       // this.resetForm(form);
     
        this.toastr.success('Account  Successfully Save', 'Delete', {
          timeOut: 3000
        });
        //update list
        this.ratemasterservice.getRateMaster();
      }});
    }}
}
