import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../model/cart';
import { Product } from '../model/product';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private userService: UserService) { }

  private get cartKey() {
    return 'cart-' + this.userService.currentUser?.email;
  }

  public getCart(): Cart {
    let cart = new Cart();
    let json = localStorage.getItem(this.cartKey);
    if (json) {
      cart.items = JSON.parse(json).items
        .map((item: { product: Product; quantity: number; }) => new CartItem(item.product, item.quantity));
    }

    return cart;
  }

  public addToCart(cartItem: CartItem) {
    let cart = this.getCart();
    let currentItems = cart.items;
    let existingItem = currentItems.find(item => item.product.id === cartItem.product.id);

    if (existingItem) {
      let otherItems = currentItems.filter(item => item.product.id !== cartItem.product.id);
      let quantity = cartItem.quantity + existingItem.quantity;
      cart = new Cart([...otherItems, new CartItem(existingItem.product, quantity)])
    }

    cart = new Cart([...currentItems, cartItem]);

    this.saveCart(cart);
  }

  public removeFromCart(cartItem: CartItem) {
    let cart = this.getCart();
    cart.items = cart.items.filter(item => item.product.id !== cartItem.product.id);

    this.saveCart(cart);
  }

  private saveCart(cart: Cart) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }
}
