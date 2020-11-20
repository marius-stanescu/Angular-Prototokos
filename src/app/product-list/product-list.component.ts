import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from '../model/cart';
import { Product } from '../model/product';
import { SmartComponent } from '../smart-component';
import { ProductService } from '../_services/product.service';
import { select, Store } from '@ngrx/store';
import { AddToCart } from '../store/cart.actions';
import { Observable } from 'rxjs';
import { LoadProducts } from '../store/product.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends SmartComponent {

  @Input()
  public categoryId: string;

  public products$: Observable<Array<Product>> = this.store.select(state => state.products);

  constructor(private productService: ProductService,
    private store: Store<{ products: Array<Product> }>) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadProducts(this.categoryId));
  }

  addToCart(cartItem: CartItem) {
    this.store.dispatch(new AddToCart(cartItem));
  }

}
