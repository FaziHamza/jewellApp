import { Component, OnInit } from '@angular/core';
import { RattiMasterService } from '../../shared/Services/RattiMaster/ratti-master.service';
import { RattiMaster } from '../../shared/Models/RattiMaster/ratti-master.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ratti-master-list',
  templateUrl: './ratti-master-list.component.html',
  styleUrls: ['./ratti-master-list.component.css']
})
export class RattiMasterListComponent implements OnInit {

  constructor(private rattiMasterService : RattiMasterService ,private toastr : ToastrService ) { }

  ngOnInit() {
           
   this.rattiMasterService.getRatti(); 
  }
  edit(rattimasterobj: RattiMaster) {

    this.rattiMasterService.rattiMaster = Object.assign({}, rattimasterobj);
  }
  delete(id:number){
    if(confirm('Are your sure you delete this record.?')){
      this.rattiMasterService.delete(id)
    .subscribe((data: any) => {
      if (data =="Succfull") {
       // this.resetForm(form);
     
        this.toastr.success('Ratti  Successfully Deleted', 'Delete', {
          timeOut: 3000
        });
        //update list
        this.rattiMasterService.getRatti(); 
      }});
    }}


}
