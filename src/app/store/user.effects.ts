import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserService } from '../_services/user.service';
import { Register, RegisterFailure, RegisterSuccess, UserActionTypes } from './user.actions';

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
}