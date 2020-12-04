import { Action } from '@ngrx/store';

export const LOGIN_INIT = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] LoginSuccess';
export const LOGIN_FAILURE = '[Auth] LoginFailure';
export const LOGOUT = '[Auth] Logout'

export class LoginInit implements Action {
  readonly type = LOGIN_INIT;
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: object,public isLoggedIn:boolean) {}
}

export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;
  constructor(public payload: object,public isLoggedIn:boolean) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export type All = LoginInit | LoginSuccess | LoginFailure | Logout;
