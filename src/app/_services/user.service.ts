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

  public register(newUser: User): string {
    let users = []
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'));
      if (users.filter(user => user.email == newUser.email).length) {
        return `Already existing email address ${newUser.email}.`;
      }
      users = [...users, newUser];
    } else {
      users = [newUser];
    }

    localStorage.setItem('users', JSON.stringify(users));

    return '';
  }

  public login(credentials: Credentials): User {
    let users = [];
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'));
    }
    var user = users.filter(u => u.email == credentials.email && u.password == credentials.password)[0];
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return new User(user.name, user.email, user.password);
    }

    return null;
  }

  public logout() {
    localStorage.removeItem('currentUser');
  }
}
