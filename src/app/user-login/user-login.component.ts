import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../model/credentials';
import { SmartComponent } from '../smart-component';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent extends SmartComponent {

  constructor(private userService: UserService,
    private router: Router) {
    super();
  }

  public login(credentials: Credentials) {
    if (this.userService.login(credentials)) {
      this.router.navigate(['/dashboard']);
    }
    //TODO: Display an error if no user found with the specified credentials
  }
}
