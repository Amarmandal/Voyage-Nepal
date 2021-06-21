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
} from "../actions/action.types";

export const createPlaceReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PLACE_REQUEST:
      return { loading: true, placeInfo: {} };
    case CREATE_PLACE_SUCCESS:
        return { loading: false, placeInfo: action.payload, success: true }
    case CREATE_PLACE_FAIL:
        return { loading: false, error: action.payload }
    case CREATE_PLACE_RESET:
      return { };
    default: 
        return state;
  }
};
