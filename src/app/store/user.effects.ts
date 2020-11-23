import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserService } from '../_services/user.service';
import { LoadCart, LoadCartSuccess } from './cart.actions';
import { LoadUser, LoadUserSuccess, Login, LoginFailure, LoginSuccess, Logout, Register, RegisterFailure, RegisterSuccess, UserActionTypes } from './user.actions';

@Injectable()
export class UserEffects {

    constructor(
        private actions: Actions,
        private userService: UserService,
        private router: Router,
    ) { }

    @Effect()
    register$: Observable<any> = this.actions.pipe(
        ofType(UserActionTypes.Register),
        map((action: Register) => {
            const registerError = this.userService.register(action.user);
            if (registerError) {
                return new RegisterFailure(registerError);
            }
            return new RegisterSuccess(action.user);
        })
    );

    @Effect({ dispatch: false })
    registerSuccess$: Observable<any> = this.actions.pipe(
        ofType(UserActionTypes.RegisterSuccess),
        tap(() => {
            this.router.navigate(['/login']);
        })
    );

    @Effect({ dispatch: false })
    registerFailure$: Observable<any> = this.actions.pipe(
        ofType(UserActionTypes.RegisterFailure)
    );

    @Effect()
    login$: Observable<any> = this.actions.pipe(
        ofType(UserActionTypes.Login),
        map((action: Login) => {
            const user = this.userService.login(action.credentials);
            if (user) {
                return new LoginSuccess(user);
            }
            return new LoginFailure('Incorrect email and/or password.');
        })
    );


    @Effect()
    loginSuccess$: Observable<any> = this.actions.pipe(
        ofType(UserActionTypes.LoginSuccess),
        map(() => {
            this.router.navigate(['/dashboard']);
            return new LoadCart();
        })
    );

    @Effect({ dispatch: false })
    loginFailure$: Observable<any> = this.actions.pipe(
        ofType(UserActionTypes.LoginFailure)
    );

    @Effect()
    logout$: Observable<any> = this.actions.pipe(
        ofType(UserActionTypes.Logout),
        map((action: Logout) => {
            this.userService.logout();
            this.router.navigate(['/login']);
            return new LoadCart();
        })
    );

    @Effect()
    loadUser$: Observable<any> = this.actions.pipe(
        ofType(UserActionTypes.LoadUser),
        map((action: LoadUser) => {
            return new LoadUserSuccess(this.userService.getCurrentUser());
        })
    );
}