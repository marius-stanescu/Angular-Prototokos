import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser: User = null;

  constructor() { }

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

  public login(email: string, password: string): boolean {
    let users = [];
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'));
    }
    var user = users.filter(u => u.email == email && u.password == password)[0];
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }

    return false;
  }
}
