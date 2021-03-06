import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzPlacementType } from 'ng-zorro-antd/dropdown';

import { NgToastService } from 'ng-angular-popup';
import { TokenStorageService } from 'src/app/Service/TokenStorageService/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userDisplayName!: string | null ;

  constructor( private router: Router,
    private toast: NgToastService,
    private token: TokenStorageService) { }

  log(data: string): void {
    console.log(data);
  }

  currentUser: any;

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  public onLogoutClick(){
    this.toast.info({detail:"INFO",summary:'You have logged out.', duration: 2000});
    this.router.navigate(['/login']);
  }

  size: NzButtonSize = 'large';

  listOfPosition: NzPlacementType[] = ['bottomCenter'];
}
