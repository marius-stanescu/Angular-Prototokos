import { Component, Input, OnInit } from '@angular/core';
import { CartVm } from './cart-vm';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  @Input()
  public cart: CartVm;

  constructor() {
  }

  ngOnInit(): void {
  }

}
