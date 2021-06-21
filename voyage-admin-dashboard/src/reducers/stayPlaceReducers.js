import {
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAIL,
  GET_HOTEL_REQUEST,
  GET_HOTEL_SUCCESS,
  GET_HOTEL_FAIL,
} from "../actions/action.types";

export const createStayPlaceReducer = (state = {}, action) => {
  // switch (action.type) {
  //   case CREATE_CATEGORY_REQUEST:
  //     return { loading: true, categoryInfo: {} };
  //   case CREATE_CATEGORY_SUCCESS:
  //     return { loading: false, categoryInfo: action.payload };
  //   case CREATE_CATEGORY_FAIL:
  //     return { loading: false, error: action.payload };
  //   default:
  //     return state;
  // }
};

export const getHotelReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_HOTEL_REQUEST:
      return { loading: true, hotels: {} };
    case GET_HOTEL_SUCCESS:
      return { loading: false, hotels: action.payload };
    case GET_HOTEL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
