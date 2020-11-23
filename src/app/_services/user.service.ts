import { Injectable } from '@angular/core';
import { Credentials } from '../model/credentials';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public get currentUser(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  public get isLoggedIn(): boolean {
    return this.currentUser !== undefined && this.currentUser !== null;
  }

  public register(user: User) {
    let users = []
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'));
      users = [...users, user];
      //TODO: Check if there's already an existing user with the same email address
    } else {
      users = [user];
    }

    localStorage.setItem('users', JSON.stringify(users));
  }

  public login(credentials: Credentials): boolean {
    let users = [];
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'));
    }
    var user = users.filter(u => u.email == credentials.email && u.password == credentials.password)[0];
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }

    return false;
  }

  public logout() {
    localStorage.removeItem('currentUser');
  }
}
