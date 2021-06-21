import axios from "axios";
import {
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_RESET,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
} from "./action.types";
import { API } from "../backend";

export const createCategory = (categoryData) => async (dispatch, getState) => {
  try {
    const URL = `${API}/category/create`;
    dispatch({ type: CREATE_CATEGORY_REQUEST });

    const { userLogin } = getState();
    const { token, userData } = userLogin.userInfo;
    
    if (!token || !userData.isAdmin) {
      throw new Error("User is not an Admin");
    }

    var config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true
    };
    const { data } = await axios.post(URL, categoryData, config);

    dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: data });
    dispatch({ type: CREATE_CATEGORY_RESET, });
  } catch (err) {
    dispatch({
      type: CREATE_CATEGORY_FAIL,
      payload:
        err.response && err.response.data.error
          ? err.response.data.error
          : err.message,
    });
    dispatch({ type: CREATE_CATEGORY_RESET, });
  }
};

export const getAllCategory = () => async (dispatch, getState) => {
  try {
    const URL = `${API}/categories`;
    dispatch({ type: GET_CATEGORY_REQUEST });

    const { userLogin } = getState();
    const { token } = userLogin.userInfo;

    var config = {
      method: "get",
      url: URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true
    };

    const { data } = await axios(config);

    dispatch({ type: GET_CATEGORY_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_CATEGORY_FAIL,
      payload:
        err.response && err.response.data.error
          ? err.response.data.error
          : err.message,
    });
  }
};

// export const updateCategory = (updatedData, categoryId) => async(dispatch, getState) => {
//     try {
//         const URL = `${API}/CATEGORY/${CATEGORYId}/update`;
//         dispatch({ type: UPDATE_CATEGORY_REQUEST });

//         const { userLogin } = getState();
//         const { token } = userLogin.userInfo;

//         const config = {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         }
//         const { data }  = await axios.put(URL, updatedData, config)

//         dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: data});
//     } catch (err) {
//         dispatch({
//             type: UPDATE_CATEGORY_FAIL,
//             payload:
//               err.response && err.response.data.error
//                 ? err.response.data.error
//                 : err.message,
//           });
//     }
// }

// export const deleteCategory = (categoryId) => async(dispatch, getState) => {
//     try {
//         const URL = `${API}/CATEGORY/${CATEGORYId}/delete`;
//         dispatch({ type: DELETE_CATEGORY_REQUEST });

//         const { userLogin } = getState();
//         const { token } = userLogin.userInfo;

//         if(!token) {
//             window.location.href = "/login";
//         }

//         const config = {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         }
//         const { data }  = await axios.delete(URL, CATEGORYData, config)

//         dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: data});
//     } catch (err) {
//         dispatch({
//             type: DELETE_CATEGORY_FAIL,
//             payload:
//               err.response && err.response.data.error
//                 ? err.response.data.error
//                 : err.message,
//           });
//     }
// }
