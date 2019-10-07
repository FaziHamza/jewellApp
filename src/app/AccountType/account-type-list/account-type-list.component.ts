import { Component, OnInit } from '@angular/core';
import { AccountTypeService } from 'src/app/shared/Services/Account/AccountType/account-type.service';

@Component({
  selector: 'app-account-type-list',
  templateUrl: './account-type-list.component.html',
  styleUrls: ['./account-type-list.component.css']
})
export class AccountTypeListComponent implements OnInit {

  constructor(public accountTypeService : AccountTypeService) { }

  ngOnInit() {
    this.accountTypeService.getAccountByType();
  }

}
