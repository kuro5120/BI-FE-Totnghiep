import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }

  log(data: string): void {
    console.log(data);
  }

  public onLogoutClick(){
    this.toast.info({detail:"INFO",summary:'You have logged out.', duration: 1000});
    this.router.navigate(['/login']);
  }

  size: NzButtonSize = 'large';
}
