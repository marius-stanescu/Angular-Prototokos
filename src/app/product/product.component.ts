import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DumbComponent } from '../dumb-component';
import { Cart, CartItem } from '../model/cart';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProductComponent extends DumbComponent {
  public quantity: number = 1;

  @Input() public product: Product;
  @Input() public addToCartEnabled: boolean;

  @Output()
  addedToCart: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor() {
    super();
  }

  get canDecreaseQuantity(): boolean {
    return this.quantity !== 1;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity === 1) {
      return;
    }
    this.quantity--;
  }

  addToCart() {
    this.addedToCart.emit(new CartItem(this.product, this.quantity));
  }
}
