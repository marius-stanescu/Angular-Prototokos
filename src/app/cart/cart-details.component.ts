import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  constructor(public cart: Cart) { }

  ngOnInit(): void {
  }

}
