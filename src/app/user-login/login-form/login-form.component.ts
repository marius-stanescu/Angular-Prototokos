import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DumbComponent } from 'src/app/dumb-component';
import { Credentials } from 'src/app/model/credentials';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent extends DumbComponent {

  @Output()
  public loginEvent: EventEmitter<Credentials> = new EventEmitter<Credentials>();

  public form: any = {};

  constructor() {
    super();
  }

  public login() {
    this.loginEvent.emit(new Credentials(this.form.email, this.form.password));
  }

}
