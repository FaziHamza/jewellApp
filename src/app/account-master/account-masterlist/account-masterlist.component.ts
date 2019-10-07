import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AccountService } from '../../shared/account.service';
declare var $;
@Component({
  selector: 'account-masterlist',
  templateUrl: './account-masterlist.component.html',
  styleUrls: ['./account-masterlist.component.css']
})
export class AccountMasterlistComponent implements OnInit {

  @ViewChild('dataTable',{static:false}) table : ElementRef;
  dataTable: any;
  messgae ="sssssss";
  constructor(public accountService: AccountService) { }
//  res = this.accountService.getAllAccounts();
  ngOnInit() :void{
    // this.accountService.getAllAccounts();
  this.dataTable =$(this.table.nativeElement);
this.dataTable.dataTable({
  "scrollY":"100px",
        "scrollCollapse": true,
        "paging":         false,
  "bLengthChange": false,
  "bFilter": true,
  "bInfo": false,
  "bAutoWidth": false ,
  "dom":' <"search"f><"top"l>rt<"bottom"ip><"clear">',
  "lengthMenu": [[2, 15, 50, -1], [10, 25, 50, "All"]]});

}

}
