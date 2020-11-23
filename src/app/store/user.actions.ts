import { Action } from '@ngrx/store';
import { User } from '../model/user';


export enum UserActionTypes {
    Register = '[User] Register',
    RegisterSuccess = '[User] Register Success',
    RegisterFailure = '[User] Register Failure',
}

export class Register implements Action {
    readonly type = UserActionTypes.Register;

    constructor(public user: User) { }
}

export class RegisterSuccess implements Action {
    readonly type = UserActionTypes.RegisterSuccess;

    constructor(public user: User) { }
}

export class RegisterFailure implements Action {
    readonly type = UserActionTypes.RegisterFailure;

    constructor(public error: string) { }
}

export type UserActions = Register | RegisterSuccess | RegisterFailure;