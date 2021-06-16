import {USER_EMAIL} from '../action.types';
import axios from 'axios';
import api from '../../../services/ApiServices'
const BASE_URL = 'http://10.0.2.2:8080/api';

export const getUserEmail = userData => {
  const email = userData;

  return async dispatch => {
    //TODO: fetch Data
    var user = JSON.stringify({
      email: email,
    });

    var config = {
      method: 'post',
      url: `/user/forget-password`,
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
      type: USER_EMAIL,
      payload: userData
    });
   })
   .catch(err => {
     const error = err
     Data = error
   })
    
    return Data
  };
};