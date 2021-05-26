import {REGISTER_USER_SUCCESS, REGISTER_USER_FAIL} from '../action.types';
import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:8080/api';

export const registerUser = userData => {
  const {name, email, password, gender, isAdmin, city, dob} = userData;

  return async dispatch => {
    //TODO: fetch Data
    var newUser = JSON.stringify({
      name: name,
      email: email,
      password: password,
      gender: gender,
      isAdmin: false,
      city: city,
      DOB: dob,
    });

    var config = {
      method: 'post',
      url: `${BASE_URL}/user/signup`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: newUser,
    };

    const result = await axios(config);

    const resultData = result;
    console.log(resultData);
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: 1,
    });
  };
};