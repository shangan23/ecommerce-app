import * as AuthActions from '../actions/auth.action';

export type Action = AuthActions.All;

export const initalState = {
  loading: false,
  details: {},
  isLoggedIn: false
};

export const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

function AuthReducer(state = initalState, action: Action) {
  switch (action.type) {
    case AuthActions.LOGIN_INIT:
      return newState(state, { loading: true });
    case AuthActions.LOGIN_SUCCESS:
      return newState(state, {
        loading: false,
        details: action.payload,
        isLoggedIn: action.isLoggedIn
      });
    case AuthActions.LOGIN_FAILURE:
      return newState(state, {
        loading: false,
        details: action.payload,
        isLoggedIn: action.isLoggedIn
      });
    case AuthActions.LOGOUT:
        return newState(state, {
          loading: false,
          details: {},
          isLoggedIn: false
        });
    default:
      return state;
  }
}

export default AuthReducer;
