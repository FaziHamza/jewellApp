import { Component, OnInit } from '@angular/core';
import { TypeMasterService } from '../../../shared/Services/Master_Form/type-master.service';
import { ToastrService } from 'ngx-toastr';
import { TypeMaster } from '../../../shared/Models/Master_Form/type-master.model';


@Component({
  selector: 'app-type-masters-list',
  templateUrl: './type-masters-list.component.html',
  styleUrls: ['./type-masters-list.component.css']
})
export class TypeMastersListComponent implements OnInit {

  constructor(public TypeMasterservice :TypeMasterService ,public toastr: ToastrService ) { }

  ngOnInit() {
    this.TypeMasterservice.getTypeMaster();
  }
  edit(typeMasterobj: TypeMaster) {

    this.TypeMasterservice.typeMaster = Object.assign({}, typeMasterobj);
  }
  delete(id:number){
    if(confirm('Are your sure you delete this record.?')){
      this.TypeMasterservice.delete(id)
    .subscribe((data: any) => {
      if (data =="Succfull") {
       // this.resetForm(form);
     
        this.toastr.success('Account  Successfully Save', 'Delete', {
          timeOut: 3000
        });
        //update list
        this.TypeMasterservice.getTypeMaster();
      }});
    }}

}
