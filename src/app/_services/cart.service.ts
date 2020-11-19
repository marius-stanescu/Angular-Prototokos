import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../model/cart';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private userService: UserService) { }

  get currentCart(): Cart {
    let cart = new Cart();
    if (localStorage.getItem(this.cartKey)) {
      cart.items = JSON.parse(localStorage.getItem(this.cartKey)).items
        .map(item => new CartItem(item.product, item.quantity));
    }

    return cart;
  }

  private get cartKey() {
    return 'cart-' + this.userService.currentUser?.email;
  }

  addItem(cartItem: CartItem) {
    let cart = this.currentCart;
    //TODO: Update existing product quantity instead of adding it again
    cart.items.push(cartItem);
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
    //TODO: maybe save just the product id and quantity
  }
}
