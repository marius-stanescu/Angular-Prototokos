import { Action } from '@ngrx/store';
import { Credentials } from '../model/credentials';
import { User } from '../model/user';


export enum UserActionTypes {
    Register = '[User] Register',
    RegisterSuccess = '[User] Register Success',
    RegisterFailure = '[User] Register Failure',
    Login = '[User] Login',
    LoginSuccess = '[User] Login Success',
    LoginFailure = '[User] Login Failure',
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

export class Login implements Action {
    readonly type = UserActionTypes.Login;

    constructor(public credentials: Credentials) { }
}

export class LoginSuccess implements Action {
    readonly type = UserActionTypes.LoginSuccess;

    constructor(public user: User) { }
}

export class LoginFailure implements Action {
    readonly type = UserActionTypes.LoginFailure;

    constructor(public error: string) { }
}

export type UserActions = Register | RegisterSuccess | RegisterFailure
    | Login | LoginSuccess | LoginFailure;