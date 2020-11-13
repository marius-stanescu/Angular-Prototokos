import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
}
