import {USER_EMAIL} from '../action.types';
import axios from 'axios';

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
      url: `${BASE_URL}/user/forget-password`,
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