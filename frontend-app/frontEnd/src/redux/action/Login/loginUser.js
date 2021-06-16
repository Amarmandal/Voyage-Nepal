import {LOGIN_USER_SUCCESS, LOGIN_USER_FAIL} from '../action.types';
import axios from 'axios';
import api from '../../../services/ApiServices'

const BASE_URL = 'https://voyage-nepal.uc.r.appspot.com/api';

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
      url: `/user/signin`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: user,
    };

    var Data = {}

   await api(config)
   .then(res => {
     const data = res.data
     Data = res.data
     dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data
    });
   })
   .catch(err => {
     const error = err
     Data = error
     dispatch({
       type: LOGIN_USER_FAIL,
       payload: error
     })
   })
    
    return Data
  };
};