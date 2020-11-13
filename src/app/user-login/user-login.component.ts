import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public form: any = {};

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public login() {
    if (this.userService.login(this.form.email, this.form.password)) {
      this.router.navigate(['/dashboard']);
    }
    //TODO: Display an error if no user found with the specified credentials
  }
}
