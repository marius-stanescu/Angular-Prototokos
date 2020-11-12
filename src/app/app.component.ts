import { Component } from '@angular/core';
import { Cart } from './model/cart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(public cart: Cart) { }

  title = 'Prototokos store';
}
