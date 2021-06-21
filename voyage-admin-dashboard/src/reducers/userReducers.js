import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_RESET,
  USER_REGISTER_SUCCESS
} from "../actions/action.types";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, userInfo: {} };
    case USER_LOGIN_SUCCESS:
      return { userInfo: action.payload, loading: false };
    case USER_LOGIN_FAIL:
      return {loading: false, error: action.payload};
    case USER_LOGOUT: 
      return { }
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true, registerInfo: {} };
    case USER_REGISTER_SUCCESS:
      return { registerInfo: action.payload, loading: false, success: true };
    case USER_REGISTER_FAIL:
      return {loading: false, error: action.payload};
    case USER_REGISTER_RESET: 
      return {}
    default:
      return state;
  }
};

