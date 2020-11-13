import { Component } from '@angular/core';
import { Cart } from './model/cart';
import { User } from './model/user';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public currentUser: User = null;

  constructor(public cart: Cart,
    private userService: UserService) {
    this.currentUser = userService.currentUser;
  }

  title = 'Prototokos store';

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  public logout() {
    this.userService.logout();
  }
}
