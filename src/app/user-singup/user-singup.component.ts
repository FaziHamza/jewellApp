import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/Models/Users/user.model';
import { UserService } from '../shared/Services/Users/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-singup',
  templateUrl: './user-singup.component.html',
  styleUrls: ['./user-singup.component.css']
})
export class UserSingupComponent implements OnInit {

  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  roles : any[];

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.userService.getAllRoles().subscribe(
      (data : any)=>{
        data.forEach(obj => obj.selected = false);
        this.roles = data;
      }
    );
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: ''
    }
    if (this.roles)
      this.roles.map(x => x.selected = false);
  }

  OnSubmit(form: NgForm) {
    var x = this.roles.filter(x => x.selected).map(y => y.Name);
    this.userService.registerUser(form.value,x)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
          this.toastr.success('User registration successful');
        }
        else
          this.toastr.error(data.Errors[0]);
      });
  }

  updateSelectedRoles(index) {
    this.roles[index].selected = !this.roles[index].selected;
  }

}

