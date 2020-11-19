import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Cart } from '../model/cart';
import { SmartComponent } from '../smart-component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends SmartComponent {

  public cart: Cart;

  constructor(private store: Store<{ cart: Cart }>) {
    super();
    store.pipe(select('cart')).subscribe(data => this.cart = data);
  }

  ngOnInit(): void {
  }

}
