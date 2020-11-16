import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

import { CartRoutingModule } from './cart-routing.module';
import { CartDetailsComponent } from './cart-details.component';
import { ProductModule } from '../product/product.module';
import { CartComponent } from './cart.component';


@NgModule({
  declarations: [
    CartDetailsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ProductModule,
    MatTableModule
  ]
})
export class CartModule { }
