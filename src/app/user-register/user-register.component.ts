import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { SmartComponent } from '../smart-component';
import { Register } from '../store/user.actions';
import { UserState } from '../store/user.reducer';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent extends SmartComponent {

  public form: any = {};
  public error$: Observable<string> = this._store.pipe(select(state => state.user.error))

  constructor(private _store: Store<{ user: UserState }>,
    private _snackBar: MatSnackBar) {
    super();
  }

  ngOnInit() {
    this.error$.subscribe((error) => {
      if (error) {
        this._snackBar.open(error, 'Close', {
          duration: 5000
        });
      }
    })
  }

  public register(user: User) {
    this._store.dispatch(new Register(user));
  }
}
