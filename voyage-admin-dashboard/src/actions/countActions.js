import axios from "axios";
import {
  GET_COUNT_FAIL,
  GET_COUNT_REQUEST,
  GET_COUNT_SUCCESS,
} from "./action.types";
import { API } from "../backend";


export const getDocsCount = () => async (dispatch, getState) => {
  try {
    const URL = `${API}/docs/count`;
    dispatch({ type: GET_COUNT_REQUEST });

    const { userLogin } = getState();
    const { token } = userLogin.userInfo;

    var config = {
      method: "get",
      url: URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    };

    const { data } = await axios(config);

    dispatch({ type: GET_COUNT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
        type: GET_COUNT_FAIL,
        payload:
          err.response && err.response.data.error
            ? err.response.data.error
            : err.message,
      });
  }
};
