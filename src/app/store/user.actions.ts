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
    Logout = '[User] Logout',
    LoadUser = '[User] Load User',
    LoadUserSuccess = '[User] Load User Success',
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

export class Logout implements Action {
    readonly type = UserActionTypes.Logout;
}

export class LoadUser implements Action {
    readonly type = UserActionTypes.LoadUser;
}

export class LoadUserSuccess implements Action {
    readonly type = UserActionTypes.LoadUserSuccess;

    constructor(public user: User) { }
}

export type UserActions = Register | RegisterSuccess | RegisterFailure
    | Login | LoginSuccess | LoginFailure | Logout
    | LoadUser | LoadUserSuccess;