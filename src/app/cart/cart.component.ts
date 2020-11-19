import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart';
import { SmartComponent } from '../smart-component';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends SmartComponent {

  public cart: Cart;

  constructor(private cartService: CartService) {
    super();
  }

  ngOnInit(): void {
    this.cart = this.cartService.currentCart;
  }

}
