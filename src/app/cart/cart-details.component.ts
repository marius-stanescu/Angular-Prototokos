import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DumbComponent } from '../dumb-component';
import { Cart } from '../model/cart';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartDetailsComponent extends DumbComponent {

  @Input()
  public cart: Cart;

  constructor() {
    super();
  }

}
