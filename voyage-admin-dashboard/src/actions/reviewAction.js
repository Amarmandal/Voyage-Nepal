import axios from "axios";
import {
  PENDING_REVIEW_REQUEST,
  PENDING_REVIEW_SUCCESS,
  PENDING_REVIEW_FAIL,
  APPROVE_REVIEW_REQUEST,
  APPROVE_REVIEW_SUCCESS,
  APPROVE_REVIEW_FAIL,
  APPROVE_REVIEW_RESET,
  REJECT_REVIEW_REQUEST,
  REJECT_REVIEW_SUCCESS,
  REJECT_REVIEW_FAIL,
  REJECT_REVIEW_RESET
} from "./action.types";
import { API } from "../backend";

export const getAllPendingReview = () => async (dispatch, getState) => {
  try {
    const { userLogin } = getState();
    const { token, userData } = userLogin.userInfo;

    const URL = `${API}/review/pending/${userData.id}`;
    dispatch({ type: PENDING_REVIEW_REQUEST });

    var config = {
      method: "get",
      url: URL,
      headers: {
        Authorization: `Bearer ${token}`,
      }
    };

    const { data } = await axios(config);

    dispatch({ type: PENDING_REVIEW_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: PENDING_REVIEW_FAIL,
      payload:
        err.response && err.response.data.error
          ? err.response.data.error
          : err.message,
    });
  }
};

export const approvePendingReview = (reviewId) => async (dispatch, getState) => {
  try {
    const { userLogin } = getState();
    const { token, userData } = userLogin.userInfo;

    const URL = `${API}/review/approve/${userData.id}`;
    dispatch({ type: APPROVE_REVIEW_REQUEST });

    var config = {
      method: "put",
      url: URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        "reviewId": reviewId.toString(),
        "approvedFlag": true
      }
    };

    const { data } = await axios(config);

    dispatch({ type: APPROVE_REVIEW_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: APPROVE_REVIEW_FAIL,
      payload:
        err.response && err.response.data.error
          ? err.response.data.error
          : err.message,
    });
  } finally {
    dispatch({ type: APPROVE_REVIEW_RESET})
  }
};

export const rejectPendingReview = (reviewId) => async (dispatch, getState) => {
  try {
    const { userLogin } = getState();
    const { token, userData } = userLogin.userInfo;

    const URL = `${API}/review/${reviewId}/${userData.id}/delete`;
    dispatch({ type: REJECT_REVIEW_REQUEST });

    var config = {
      method: "delete",
      url: URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios(config);

    dispatch({ type: REJECT_REVIEW_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: REJECT_REVIEW_FAIL,
      payload:
        err.response && err.response.data.error
          ? err.response.data.error
          : err.message,
    });
  } finally {
    dispatch({ type: REJECT_REVIEW_RESET })
  }
};

// export const getNextCategory = (lastObjId = null) => async (dispatch, getState) => {
//   try {
//     const { userLogin } = getState();
//     const { token, userData } = userLogin.userInfo;

//     let URL;
//     if(!lastObjId) {
//       URL = `${API}/categories/next-page/${userData.id}`;
//     } else {
//       URL = `${API}/categories/next-page/${userData.id}/${lastObjId}`;
//     }
//     dispatch({ type: GET_CATEGORY_CHUNK_REQUEST });

//     var config = {
//       method: "get",
//       url: URL,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       }
//     };

//     const { data: categoryDataList } = await axios(config);


//     dispatch({ type: GET_CATEGORY_CHUNK_SUCCESS, payload: {
//       data: categoryDataList.data,
//       firstId: categoryDataList.data[0]._id.toString(),
//       lastId: categoryDataList.data[categoryDataList.data.length-1]._id.toString()
//     } });

//     if(!lastObjId) {
//       dispatch({
//         type: MARK_FIRST_CATEGORY_PAGE,
//         payload: 'true'
//       })
//     }

//     if(categoryDataList.data.length !== 5) {
//       dispatch({
//         type: END_OF_CATEGORY_PAGE,
//         payload: 'true'
//       })
//     }
//   } catch (err) {
//     dispatch({
//       type: GET_CATEGORY_CHUNK_FAIL,
//       payload:
//         err.response && err.response.data.error
//           ? err.response.data.error
//           : err.message,
//     });
//   }
// };

// export const getPreviousCategory = (firstObjId) => async (dispatch, getState) => {
//   try {
//     const { userLogin, categoryList } = getState();
//     const { token, userData } = userLogin.userInfo;

//     const  URL = `${API}/categories/previous-page/${userData.id}/${firstObjId}`;

//     dispatch({ type: GET_CATEGORY_CHUNK_REQUEST });

//     var config = {
//       method: "get",
//       url: URL,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       }
//     };

//     const { data: categoryDataList } = await axios(config);

//     const reverseCategoryDataList = categoryDataList.data.reverse();

//     if(reverseCategoryDataList.length === 5) {
//       dispatch({ type: GET_CATEGORY_CHUNK_SUCCESS, payload: {
//         data: reverseCategoryDataList,
//         firstId: reverseCategoryDataList[0]._id.toString(),
//         lastId: reverseCategoryDataList[reverseCategoryDataList.length-1]._id.toString()
//       } });
//     } else  {
//       dispatch({
//         type: GET_CATEGORY_CHUNK_SUCCESS,
//         payload: {
//           data: categoryList.categories,
//           firstId: categoryList.firstObjectId,
//           lastId: categoryList.lastObjectId
//         }
//       })

//       dispatch({
//         type: MARK_FIRST_CATEGORY_PAGE,
//         payload: 'true'
//       })
//     }
//   } catch (err) {
//     dispatch({
//       type: GET_CATEGORY_CHUNK_FAIL,
//       payload:
//         err.response && err.response.data.error
//           ? err.response.data.error
//           : err.message,
//     });
//   }
// }


// export const deleteCategory = (categoryId) => async (dispatch, getState) => {
//   try {
//     const { userLogin } = getState();
//     const { token, userData } = userLogin.userInfo;

//     dispatch({ type: DELETE_CATEGORY_REQUEST });

//     const URL = `${API}/category/${categoryId}/${userData.id}`;

//     if (!token || !userData.isAdmin) {
//       throw new Error("User is not an Admin");
//     }

//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     const { data } = await axios.delete(URL, config);

//     dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: data });
//   } catch (err) {
//     dispatch({
//       type: DELETE_CATEGORY_FAIL,
//       payload:
//         err.response && err.response.data.error
//           ? err.response.data.error
//           : err.message,
//     });
//   } finally {
//     dispatch({ type: RESET_DELETE_CATEGORY })
//   }
// };