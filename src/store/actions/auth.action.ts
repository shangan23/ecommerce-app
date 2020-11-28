import { Action } from '@ngrx/store';

export const LOGIN_FETCH = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] LoginSuccess';
export const LOGIN_FAILURE = '[Auth] LoginFailure';

export class LoginFetch implements Action {
  readonly type = LOGIN_FETCH;
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: object) {}
}

export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;
  constructor(payload: object) {}
}

export type All = LoginFetch | LoginSuccess | LoginFailure;
