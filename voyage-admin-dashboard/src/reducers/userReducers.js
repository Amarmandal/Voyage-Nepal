import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT
} from "../actions/action.types";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, userInfo: {} };
    case USER_LOGIN_SUCCESS:
      return { userInfo: action.payload, loading: false };
    case USER_LOGIN_FAIL:
      console.log('logout_fail')
      return {loading: false, error: action.payload};
    case USER_LOGOUT: 
      return { }
    default:
      return state;
  }
};

