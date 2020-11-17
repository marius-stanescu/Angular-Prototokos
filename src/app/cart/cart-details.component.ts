import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DumbComponent } from '../dumb-component';
import { CartVm } from './cart-vm';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartDetailsComponent extends DumbComponent {

  @Input()
  public cart: CartVm;

  constructor() {
    super();
  }

}
