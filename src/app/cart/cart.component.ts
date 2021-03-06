import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart, CartItem } from '../model/cart';
import { SmartComponent } from '../smart-component';
import { RemoveFromCart } from '../store/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends SmartComponent {

  public cart$: Observable<Cart> = this.store.pipe(select(state => state.cart));

  constructor(private store: Store<{ cart: Cart }>) {
    super();
  }

  removeFromCart(cartItem: CartItem) {
    this.store.dispatch(new RemoveFromCart(cartItem));
  }
}
