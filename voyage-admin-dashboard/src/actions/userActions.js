import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_RESET,
  USER_REGISTER_SUCCESS,
} from "./action.types";
import { API } from "../backend";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });

      const { data } = await axios.post(`${API}/user/signin`, {
        email,
        password,
      });

      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (err) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          err.response && err.response.data.error
            ? err.response.data.error
            : err.message,
      });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_LOGOUT });
    window.location.href = "/login";
  }
}

export const register = (token) => async(dispatch) => {
  try {
    dispatch({ 
      type: USER_REGISTER_REQUEST
    });

    if(!token) {
      throw new Error('Token has expired');
    }

    const config = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }

    const URL = `${API}/user/verify-email`;
    const { data } = await axios.post(URL, {token}, config);

    if(data?.error) {
      throw new Error(data.error);
    }

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
    })

  } catch (err) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        err.response && err.response.data.error
          ? err.response.data.error
          : err.message,
    });
  } finally {
    dispatch({
      type: USER_REGISTER_RESET
    })
  }
}