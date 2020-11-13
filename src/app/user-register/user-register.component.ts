import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public form: any = {};

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public register() {
    const newUser = new User(this.form.name, this.form.email, this.form.password);
    this.userService.register(newUser);
    this.router.navigate(['/dashboard']);
  }
}
