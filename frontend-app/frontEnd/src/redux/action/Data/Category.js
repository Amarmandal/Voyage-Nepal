import {FETCH_CATEGORY} from '../action.types';
import api from '../../../services/ApiServices';

export const Category = (data) => {
  return dispatch => {
    dispatch({
        type: FETCH_CATEGORY,
        payload: data,
      });
  };
};
