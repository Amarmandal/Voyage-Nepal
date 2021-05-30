import {RESET_PASSWORD, RESET_PASSWORD_FAIL} from '../action.types';
import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:8080/api';

export const resetPassword = otp => {
  const code = otp;

  return async dispatch => {
    var data = JSON.stringify({
      otp: code,
    });

    var config = {
      method: 'post',
      url: `${BASE_URL}/user/verify-reset-otp`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    var Data = {};

    axios(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        Data = response.data;
        dispatch({
          type: RESET_PASSWORD,
          payload: response.data,
        });
      })
      .catch(error => {
        console.log(error);
        Data = error;
        dispatch({
          type: RESET_PASSWORD_FAIL,
          payload: error,
        });
      });
    return Data;
  };
};
