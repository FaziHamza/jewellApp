import { Component, OnInit } from '@angular/core';
import { FormGroup ,Validators, NgForm } from '@angular/forms';
import { SalaryserviceService } from '../shared/salaryservice.service';
import { AccountService } from '../shared/account.service';
import { ToastrService } from 'ngx-toastr';
import { Salary } from '../shared/Models/Salary/salary.model';
declare var $;
@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent implements OnInit {

  accountlist : any[];
  namelist : any[];
  salary: Salary;
  constructor(private accountService: AccountService ,private salaryservic :SalaryserviceService , private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.salaryservic.getAccountTypes().subscribe(res => {
      this.accountlist = res as any[];
    });}
  onTypeChange(event){

    this.accountService.getSaleManList(event).subscribe(res => this.namelist = res as any[]);;
    }
    resetForm(form? : NgForm): any {
      if(form!=null)
        form.reset();
        this.salary ={
          AccountType :0,
          CustomerName :'',
          SlaryAmount :0
        }
      }
      OnSubmit(form: NgForm) {
  
         this.salaryservic.AddSalary(form.value)
           .subscribe((data: any) => {
             if (data.Succeeded == true) {
              // this.resetForm(form);
               this.toastr.success('Salary  successful save.');
         this.accountService.getAllAccounts(); 
             }
             else
               this.toastr.error(data.Errors[0]);
           });
          // this.resetForm(form);
               this.toastr.success('Account  successful save.');
        //  this.accountService.getAllAccounts();
          }

          

}


