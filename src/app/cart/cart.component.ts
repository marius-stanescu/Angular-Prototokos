import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart';
import { SmartComponent } from '../smart-component';
import { CartItemVm, CartVm } from './cart-vm';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends SmartComponent {

  public cart: CartVm;

  constructor(private cartService: Cart) {
    super();
  }

  ngOnInit(): void {
    var items = this.cartService.items
      .map(item => new CartItemVm(item.product, item.quantity, item.total));
    this.cart = new CartVm(items, this.cartService.count, this.cartService.total);
  }

}
