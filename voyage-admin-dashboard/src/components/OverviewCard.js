import React from "react";
import {
  TOGGLE_OVERVIEW_USER,
  TOGGLE_OVERVIEW_PLACE,
  TOGGLE_OVERVIEW_CATEGORY,
  TOGGLE_OVERVIEW_HOTEL
} from "../actions/action.types";
import { getNextPlaces } from "../actions/placeActions";
import { getNextCategory } from "../actions/categoryActions";
import { useDispatch } from "react-redux";

const OverviewCard = ({ title, info, borderStyle = "primary" }) => {
  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    switch (borderStyle) {
      case 'primary':
        dispatch({ type: TOGGLE_OVERVIEW_USER });
        break;
      case 'success':
        dispatch({ type: TOGGLE_OVERVIEW_PLACE });
        dispatch(getNextPlaces())
        break;
      case 'info':
        dispatch({ type: TOGGLE_OVERVIEW_CATEGORY });
        dispatch(getNextCategory())
        break;
      case 'warning':
        dispatch({ type: TOGGLE_OVERVIEW_HOTEL });
        break;
      default:
        break;
    }
  }

  return (
    <div className={`card border-left-${borderStyle} shadow h-100 py-2`}
    style={{ cursor: 'pointer'}}
    onClick={handleOnClick}
    >
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col ms-2">
            <div
              className={`text-xs font-weight-bold text-${borderStyle} text-uppercase mb-1`}
            >
              {title}
            </div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">{info}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
