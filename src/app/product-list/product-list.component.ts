import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from '../model/cart';
import { Product } from '../model/product';
import { SmartComponent } from '../smart-component';
import { ProductService } from '../_services/product.service';
import { Store } from '@ngrx/store';
import { AddToCart } from '../store/cart.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends SmartComponent {

  @Input()
  public categoryId: string;

  public products: Array<Product> = new Array<Product>();

  constructor(private productService: ProductService,
    private store: Store<{ cart: Cart }>) {
    super();
  }

  ngOnInit(): void {
    this.productService
      .getProducts(this.categoryId)
      .pipe(this.untilComponentDestroy())
      .subscribe((data: Product[]) => this.products = data);
  }

  addToCart(cartItem: CartItem) {
    this.store.dispatch(new AddToCart(cartItem));
  }

}
