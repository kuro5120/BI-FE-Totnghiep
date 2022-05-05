import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

import { NgToastService } from 'ng-angular-popup';

import { AuthService } from 'src/app/Service/AuthService/auth.service';

import { UserAuthentication } from 'src/Model/User.model';
import { TokenStorageService } from 'src/app/Service/TokenStorageService/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginform')
  loginform!: NgForm;

  LogInForm!: FormGroup;

  passwordPattern = /^(?=(.*[A-Z]){1,})(?=(.*[\d]){1,}).{6,}$/;

  constructor( private router: Router,
    private toast: NgToastService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private fb: FormBuilder) {}

  roles: string[] = [];

  ngOnInit(): void {
    this.LogInForm = this.fb.group({
      userName: "",
      password: "",
    });
  }



  userInfo: any = {
    userName: '',
    password: '',
  };

  login() {

    const { userName, password } = this.userInfo;
    this.authService.login(userName, password).subscribe(
      data => {
        this.tokenStorage.saveUser(data);
        this.toast.success({detail:"SUCCESS",summary:'login successfully', duration: 3000});
        this.router.navigate(['/home/BusinessIncome'])
      },
      err => {
        if (!this.loginform.valid){
          this.toast.error({detail:"ERROR",summary:'Incorrect username or password', duration: 3000});
          return;
        }
      }
    )
    console.log(this.loginform.value);
  }


  size: NzButtonSize = 'large';

}
