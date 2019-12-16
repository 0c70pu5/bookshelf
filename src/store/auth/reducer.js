import {AuthActions} from './actions'
import {userInfo} from '../../module/local-storage';

const AUTH_INITIAL_STATE = {
  name: userInfo.name,
  token: userInfo.token
};

function auth(state = AUTH_INITIAL_STATE, action) {
  switch (action.type) {
    case AuthActions.SET_CURRENT_USER: {
      return {
        ...state,
        ...action.payload.data
      };
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export {
  auth
};
