import axios from "axios";
import {
  CREATE_PLACE_REQUEST,
  CREATE_PLACE_SUCCESS,
  CREATE_PLACE_FAIL,
  CREATE_PLACE_RESET,
  UPDATE_PLACE_REQUEST,
  UPDATE_PLACE_SUCCESS,
  UPDATE_PLACE_FAIL,
  DELETE_PLACE_REQUEST,
  DELETE_PLACE_SUCCESS,
  DELETE_PLACE_FAIL,
  GET_PLACE_REQUEST,
  GET_PLACE_SUCCESS,
  GET_PLACE_FAIL,
} from "./action.types";
import { API } from "../backend";

export const createPlace = (placeData) => async (dispatch, getState) => {
  try {
    const { userLogin } = getState();
    const { token, userData } = userLogin.userInfo;

    const URL = `${API}/place/create/${userData.id}`;
    dispatch({ type: CREATE_PLACE_REQUEST });

    if (!token || !userData.isAdmin) {
      throw new Error("User is not an Admin");
    }

    var config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    };

    const { data } = await axios.post(URL, placeData, config);

    dispatch({ type: CREATE_PLACE_SUCCESS, payload: data });
    dispatch({ type: CREATE_PLACE_RESET, });
  } catch (err) {
    dispatch({
      type: CREATE_PLACE_FAIL,
      payload:
        err.response && err.response.data.error
          ? err.response.data.error
          : err.message,
    });
    dispatch({ type: CREATE_PLACE_RESET, });
  }
};

// export const updatePlace =
//   (updatedData, placeId) => async (dispatch, getState) => {
//     try {
//       const URL = `${API}/place/${placeId}/update`;
//       dispatch({ type: UPDATE_PLACE_REQUEST });

//       const { userLogin } = getState();
//       const { token } = userLogin.userInfo;

//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       const { data } = await axios.put(URL, updatedData, config);

//       dispatch({ type: UPDATE_PLACE_SUCCESS, payload: data });
//     } catch (err) {
//       dispatch({
//         type: UPDATE_PLACE_FAIL,
//         payload:
//           err.response && err.response.data.error
//             ? err.response.data.error
//             : err.message,
//       });
//     }
//   };

// export const deletePlace = (placeId) => async (dispatch, getState) => {
//   try {
//     const URL = `${API}/place/${placeId}/delete`;
//     dispatch({ type: DELETE_PLACE_REQUEST });

//     const { userLogin } = getState();
//     const { token } = userLogin.userInfo;

//     if (!token) {
//       window.location.href = "/login";
//     }

//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     const { data } = await axios.delete(URL, placeData, config);

//     dispatch({ type: DELETE_PLACE_SUCCESS, payload: data });
//   } catch (err) {
//     dispatch({
//       type: DELETE_PLACE_FAIL,
//       payload:
//         err.response && err.response.data.error
//           ? err.response.data.error
//           : err.message,
//     });
//   }
// };
