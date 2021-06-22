import axios from "axios";
import {
  GET_HOTEL_REQUEST,
  GET_HOTEL_SUCCESS,
  GET_HOTEL_FAIL,
} from "./action.types";
import { API } from "../backend";

export const getAllStayPlace = () => async (dispatch, getState) => {
  try {
    const URL = `${API}/hotels`;
    dispatch({ type: GET_HOTEL_REQUEST });

    const { userLogin } = getState();
    const { token } = userLogin.userInfo;

    var config = {
      method: "get",
      url: URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.defaults.withCredentials = true;

    const { data } = await axios(config);

    dispatch({ type: GET_HOTEL_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_HOTEL_FAIL,
      payload:
        err.response && err.response.data.error
          ? err.response.data.error
          : err.message,
    });
  }
};

export const createStayPlace = (hotelData) => async (dispatch, getState) => {
  // try {
  //   const URL = `${API}/category/create`;
  //   dispatch({ type: CREATE_CATEGORY_REQUEST });

  //   const { userLogin } = getState();
  //   const { token, userData } = userLogin.userInfo;
    
  //   if (!token || !userData.isAdmin) {
  //     throw new Error("User is not an Admin");
  //   }

  //   var config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     withCredentials: true
  //   };
  //   const { data } = await axios.post(URL, categoryData, config);

  //   dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: data });
  //   dispatch({ type: CREATE_CATEGORY_RESET, });
  // } catch (err) {
  //   dispatch({
  //     type: CREATE_CATEGORY_FAIL,
  //     payload:
  //       err.response && err.response.data.error
  //         ? err.response.data.error
  //         : err.message,
  //   });
  //   dispatch({ type: CREATE_CATEGORY_RESET, });
  // }
};
