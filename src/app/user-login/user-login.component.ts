import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Credentials } from '../model/credentials';
import { SmartComponent } from '../smart-component';
import { Login } from '../store/user.actions';
import { UserState } from '../store/user.reducer';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent extends SmartComponent {

  constructor(private _store: Store<{ user: UserState }>,
    private _snackBar: MatSnackBar) {
    super();
  }

  ngOnInit() {
    this._store.select(state => state.user.error).subscribe((error) => {
      if (error) {
        this._snackBar.open(error, 'Close', {
          duration: 5000
        });
      }
    });
  }

  public login(credentials: Credentials) {
    this._store.dispatch(new Login(credentials));
  }
}
