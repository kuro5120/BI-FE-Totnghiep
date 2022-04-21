import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './Information/company/company.component';
import { HomeComponent } from './module/home/home.component';
import { LoginComponent } from './module/login/login.component';

import { DashboardComponent } from './module/dashboard/dashboard.component';
import { ProductComponent } from './module/dashboard/product/product.component';
import { CustomerBIComponent } from './module/dashboard/customer-bi/customer-bi.component';
import { OrderlistBiComponent } from './module/dashboard/orderlist-bi/orderlist-bi.component';
import { DatatreeComponent } from './module/dashboard/datatree/datatree.component';

import { ContactComponent } from './Information/contact/contact.component';

const routes:  Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,

    children: [
      {
        path: 'home/BusinessIncome',
        component: DashboardComponent
      },
      {
        path: 'home/Expenses',
        component: ProductComponent
      },
      {
        path: 'home/ComparativeCosts',
        component: CustomerBIComponent
      },
      {
        path: 'home/orderlist',
        component: OrderlistBiComponent
      },
      {
        path: 'home/Company',
        component: CompanyComponent
      },
      {
        path: 'home/Contact',
        component: ContactComponent
      },
      {
        path: 'home/datatree',
        component: DatatreeComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
