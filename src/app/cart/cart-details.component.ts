import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DumbComponent } from '../dumb-component';
import { Cart, CartItem } from '../model/cart';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartDetailsComponent extends DumbComponent {

  @Input()
  public cart: Cart;

  @Output()
  removedFromCart: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor() {
    super();
  }

  public removeFromCart(item: CartItem) {
    this.removedFromCart.emit(item);
  }

}
