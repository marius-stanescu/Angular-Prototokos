import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from './model/cart';
import { User } from './model/user';
import { SmartComponent } from './smart-component';
import { LoadCart } from './store/cart.actions';
import { LoadUser, Logout } from './store/user.actions';
import { UserState } from './store/user.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent extends SmartComponent {

  public currentUser$: Observable<User> = this._store.pipe(select(state => state.user.user));
  public isLoggedIn$: Observable<boolean> = this._store.pipe(select(state => state.user.isAuthenticated));
  public cart$: Observable<Cart> = this._store.pipe(select(state => state.cart));

  constructor(private _store: Store<{ cart: Cart, user: UserState }>) {
    super();
  }

  ngOnInit() {
    this._store.dispatch(new LoadUser());
    this._store.dispatch(new LoadCart());
  }

  public title = 'Prototokos store';

  public logout() {
    this._store.dispatch(new Logout());
  }
}
