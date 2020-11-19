import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../model/cart';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private userService: UserService) { }

  private get cartKey() {
    return 'cart'; //-' + this.userService.currentUser?.email;
  }

  public getCart(): Cart {
    let cart = new Cart();
    let json = localStorage.getItem(this.cartKey);
    if (json) {
      cart.items = JSON.parse(json).items
        .map(item => new CartItem(item.product, item.quantity));
    }

    return cart;
  }

  public updateCart(cart: Cart) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }
}
