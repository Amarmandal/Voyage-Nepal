import axios from "axios";
import {
  GET_HOTEL_REQUEST,
  GET_HOTEL_SUCCESS,
  GET_HOTEL_FAIL,
} from "./action.types";
import { API } from "../backend";

export const getAllStayPlace = () => async (dispatch, getState) => {
  try {
    const { userLogin } = getState();
    const { token, userData } = userLogin.userInfo;

    const URL = `${API}/hotels/${userData.id}`;
    dispatch({ type: GET_HOTEL_REQUEST });

    var config = {
      method: "get",
      url: URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

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
  //   const { userLogin } = getState();
  //   const { token, userData } = userLogin.userInfo;

  //   const URL = `${API}/category/create/${userData.id}`;
  //   dispatch({ type: CREATE_CATEGORY_REQUEST });
    
  //   if (!token || !userData.isAdmin) {
  //     throw new Error("User is not an Admin");
  //   }

  //   var config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
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
