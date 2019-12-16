import {userInfo} from '../../module/local-storage';

class AuthActions {
  static SET_CURRENT_USER = 'AUTH/SET_CURRENT_USER';

  static setAuthData(data) {
    return function (dispatch) {
      dispatch({
        type: AuthActions.SET_CURRENT_USER,
        payload: {
          data
        }
      });
      userInfo.auth = data;
    }
  }

  static logout() {
    return function (dispatch) {
      dispatch({
        type: AuthActions.SET_CURRENT_USER,
        payload: {data: {}}
      });
      userInfo.clear();
    };
  }
}

export {
  AuthActions
};
