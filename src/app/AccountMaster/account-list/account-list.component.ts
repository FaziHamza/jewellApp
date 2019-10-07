import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  constructor(public accountService: AccountService ) { }
  messgae ="ssss";
  ngOnInit() {
    this.accountService.getAllAccounts();
   
  }

}
