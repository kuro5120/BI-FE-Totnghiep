import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginform')
  loginform!:NgForm;

  userInfo = {
    userName: '',
    password: '',
  };

  passwordPattern = /^(?=(.*[A-Z]){1,})(?=(.*[\d]){1,}).{8,}$/;

  constructor( private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }

  onSubmit() {

    if (!this.loginform.valid){
      this.toast.error({detail:"ERROR",summary:'Incorrect username or password', duration: 2000});
      return;
    }

    if (this.loginform.valid){
      this.toast.success({detail:"SUCCESS",summary:'login successfully', duration: 2000});
      this.router.navigate(['/home/home/BusinessIncome'])
    }

    console.log(this.loginform.value);
  }


  size: NzButtonSize = 'large';

}
