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
  GET_PLACES_REQUEST,
  GET_PLACES_SUCCESS,
  GET_PLACES_FAIL,
  MARK_FIRST_PLACES_PAGE,
  END_OF_PLACES_PAGE
} from "../actions/action.types";

export const createPlaceReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PLACE_REQUEST:
      return { loading: true, placeInfo: {} };
    case CREATE_PLACE_SUCCESS:
      return { loading: false, placeInfo: action.payload, success: true };
    case CREATE_PLACE_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_PLACE_RESET:
      return {};
    default:
      return state;
  }
};

export const placeListReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PLACES_REQUEST:
      return { loading: true, placeInfo: {} };
    case GET_PLACES_SUCCESS:
      return {
        loading: false,
        places: action.payload.data,
        lastObjectId: action.payload.lastId,
        firstObjectId: action.payload.firstId
      };
    case GET_PLACES_FAIL:
      return { loading: false, error: action.payload };
    case END_OF_PLACES_PAGE:
      return { ...state, isEndOfPlacePage: action.payload };
    case MARK_FIRST_PLACES_PAGE:
      return {
        ...state,
        isFirstPage: action.payload,
      };
    default:
      return state;
  }
};
