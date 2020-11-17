import { Component, Input, OnInit } from '@angular/core';
import { DumbComponent } from '../_helpers/dumb-component';
import { CartVm } from './cart-vm';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent extends DumbComponent {

  @Input()
  public cart: CartVm;

  constructor() {
    super();
  }

}
