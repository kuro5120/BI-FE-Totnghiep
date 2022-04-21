import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { NgToastModule } from 'ng-angular-popup';

import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { ProductComponent } from './module/dashboard/product/product.component';
import { CustomerBIComponent } from './module/dashboard/customer-bi/customer-bi.component';
import { OrderlistBiComponent } from './module/dashboard/orderlist-bi/orderlist-bi.component';

import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { LoginComponent } from './module/login/login.component';
import { HomeComponent } from './module/home/home.component';
import { CompanyComponent } from './Information/company/company.component';
import { ContactComponent } from './Information/contact/contact.component';
import { DatatreeComponent } from './module/dashboard/datatree/datatree.component';

import { TokenService } from './Service/token.service';


registerLocaleData(vi);


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductComponent,
    LoginComponent,
    HomeComponent,
    CompanyComponent,
    CustomerBIComponent,
    OrderlistBiComponent,
    ContactComponent,
    DatatreeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    NzButtonModule,
    NzLayoutModule,
    NzEmptyModule,
    NzNotificationModule,

    NgToastModule,

    SharedModule,

    PowerBIEmbedModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
