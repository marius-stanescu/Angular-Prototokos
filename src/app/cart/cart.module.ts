import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class CartModule { }
