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

    const result = await axios(config);

    const resultData = result
    // console.log(resultData);
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: resultData
    });
    return resultData
  };
};

// export const registerUserFail = (userData) => {
//     const {userId, name, email, password, city, dob, gender } = userData

//     return async dispatch => {
//         dispatch({
//             type: REGISTER_USER_FAIL,
//             payload: 1
//         })
//     }
// }
