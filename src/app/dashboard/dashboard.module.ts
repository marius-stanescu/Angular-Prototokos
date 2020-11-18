import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProductModule } from '../product/product.module';
import { ProductListComponent } from '../product-list/product-list.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductListComponent
  ],
  imports: [
    DashboardRoutingModule,
    ProductModule,
    CommonModule,
    MatTabsModule,
    MatGridListModule
  ]
})
export class DashboardModule { }
