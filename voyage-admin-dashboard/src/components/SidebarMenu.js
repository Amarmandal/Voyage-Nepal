import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    FaHotel,
    FaList,
    FaUserAlt,
} from "react-icons/fa";
import {
    MdLocationOn,
    MdKeyboardArrowRight,
    MdKeyboardArrowDown,
} from "react-icons/md";
import {
  TOGGLE_CATEGORY,
  TOGGLE_PLACE,
  TOGGLE_HOTEL,
  TOGGLE_USER,
} from "../actions/action.types";
import CollapseUtility from "./CollapseUtility";

const SidebarMenu = ({
  menuTitle = "Place",
  utilityMenu,
  toggleKey,
}) => {
  const dispatch = useDispatch();
  const sidebarToggle = useSelector(state => state.sidebarToggle);

  const handleToggle = (title) => {
    switch (title) {
      case "Place":
        dispatch({ type: TOGGLE_PLACE });
        break;
      case "Categories":
        dispatch({ type: TOGGLE_CATEGORY });
        break;
      case "Hotel":
        dispatch({ type: TOGGLE_HOTEL });
        break;
      case "User":
        dispatch({ type: TOGGLE_USER });
        break;
      default:
        break;
    }
  };

  const getConditionalIcon = () => {
    switch (menuTitle) {
        case "Place":
          return <MdLocationOn size="20" />
        case "Categories":
          return <FaList />
        case "Hotel":
          return <FaHotel />
        case "User":
          return  <FaUserAlt />
        default:
          break;
    }
  }

  return (
    <li
      className="nav-item nav-link collapsed"
      onClick={() => handleToggle(menuTitle)}
    >
      <Link className="nav-link collapsed" to="#">
        {getConditionalIcon()}
        <span className="ms-2">{menuTitle}</span>
        {!sidebarToggle[toggleKey] ? (
          <MdKeyboardArrowRight size="18" className="float-end" />
        ) : (
          <MdKeyboardArrowDown size="18" className="float-end" />
        )}

        {sidebarToggle[toggleKey] && <CollapseUtility menu={utilityMenu} />}
      </Link>
    </li>
  );
};

export default SidebarMenu;
