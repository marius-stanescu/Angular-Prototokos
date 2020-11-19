import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Cart, CartItem } from './model/cart';
import { User } from './model/user';
import { LoadCart } from './store/cart.actions';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public currentUser: User;
  public cart: Cart;

  constructor(private store: Store<{ cart: Cart }>,
    private userService: UserService,
    private router: Router) {
    this.currentUser = userService.currentUser;
    store.pipe(select('cart')).subscribe(data => this.cart = data);
  }

  ngOnInit() {
    this.store.dispatch(new LoadCart());
  }

  public title = 'Prototokos store';

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  public logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
