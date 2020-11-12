import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../model/cart';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  public quantity = 1;

  @Input() public product: Product;
  @Input() public addToCartEnabled: boolean;

  constructor(private cart: Cart) { }

  ngOnInit(): void {
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
    this.cart.addItem(this.product, this.quantity);
  }
}
