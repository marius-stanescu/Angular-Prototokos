import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { SmartComponent } from '../smart-component';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent extends SmartComponent {

  public form: any = {};

  constructor(private userService: UserService,
    private router: Router) {
    super();
  }

  public register(user: User) {
    this.userService.register(user);
    this.router.navigate(['/login']);
  }
}
