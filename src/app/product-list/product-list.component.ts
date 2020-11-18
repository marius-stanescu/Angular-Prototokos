import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from '../model/cart';
import { Product } from '../model/product';
import { Products } from '../model/products';
import { SmartComponent } from '../smart-component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends SmartComponent {

  @Input()
  public categoryId: string;

  public products: Array<Product> = new Array<Product>();

  constructor(private cartService: Cart) {
    super();
  }

  ngOnInit(): void {
    this.products = Products.filter(p => p.categoryId === this.categoryId);
  }

  addToCart(cartItem: CartItem) {
    this.cartService.addItem(cartItem);
  }

}
