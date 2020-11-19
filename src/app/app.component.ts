import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from './model/cart';
import { User } from './model/user';
import { CartService } from './_services/cart.service';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public currentUser: User = null;

  constructor(private cartService: CartService,
    private userService: UserService,
    private router: Router) {
    this.currentUser = userService.currentUser;
  }

  title = 'Prototokos store';

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  get cart(): Cart {
    return this.cartService.currentCart;
  }

  public logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
