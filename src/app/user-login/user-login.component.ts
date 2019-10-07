import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/Services/Users/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
  }
  
  
  OnSubmit(userName,password){
   // alert("done")
    this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
     localStorage.setItem('userToken',data.access_token);
     localStorage.setItem('userRoles',data.role);
     this.router.navigate(['/home']);
   },
   (err : HttpErrorResponse)=>{
     this.isLoginError = true;
   });
 }

}