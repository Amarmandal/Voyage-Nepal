import {LOGIN_USER_SUCCESS, LOGIN_USER_FAIL} from '../action.types';
import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:8080/api';

export const loginUser = userData => {
  const {email, password} = userData;

  return async dispatch => {
    //TODO: fetch Data
    var user = JSON.stringify({
      email: email,
      password: password,
    });

    var config = {
      method: 'post',
      url: `${BASE_URL}/user/signin`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: user,
    };

    var Data = {}

   await axios(config)
   .then(res => {
     const data = res.data
     Data = res.data
     dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data
    });
   })
   .catch(err => console.log(err))
    
    return Data
  };
};