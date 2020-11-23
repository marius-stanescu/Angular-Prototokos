import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DumbComponent } from 'src/app/dumb-component';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent extends DumbComponent {

  @Output()
  public registerEvent: EventEmitter<User> = new EventEmitter<User>();

  public form: any = {}

  constructor() {
    super();
  }

  public register() {
    const newUser = new User(this.form.name, this.form.email, this.form.password);
    this.registerEvent.emit(newUser);
  }
}
