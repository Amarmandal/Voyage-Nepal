import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaLaughWink } from "react-icons/fa";
import { useCookies } from "react-cookie";
import { Button } from "reactstrap";
import { logout } from "../actions/userActions";

import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.userLogin);
  const { userData } = userInfo;
  const [cookie, setCookie, removeCookie] = useCookies('cookie');

  const handleLogout = () => {
    dispatch(logout());
    removeCookie('token');
  };

  return (
    <ul
      className="navbar-nav sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <FaLaughWink size={32} />
        </div>
        <div className="sidebar-brand-text mx-3">
          {userData.name.split(' ')[0]} 
        </div>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <FaTachometerAlt />
          <span className="ms-2">Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Interface</div>

      <SidebarMenu
        menuTitle="Place"
        utilityMenu={[
          { subMenuTitle: "Create Place", linkText: "/place/create" },
          { subMenuTitle: "Update Place", linkText: "/place/update"},
          { subMenuTitle: "Delete Place", linkText: "/place/delete" },
        ]}
        toggleKey="placeToggle"
      />

      <SidebarMenu
        menuTitle="Categories"
        utilityMenu={[
          { subMenuTitle: "Create Category", linkText: "/category/create" },
          { subMenuTitle: "Update Category", linkText: "/category/update"},
          { subMenuTitle: "Delete Category", linkText: "/category/delete" },
        ]}
        toggleKey="categoryToggle"
      />

      <SidebarMenu
        menuTitle="Hotel"
        utilityMenu={[
          { subMenuTitle: "Create Hotel", linkText: "/hotel/create" },
          { subMenuTitle: "Update Hotel", linkText: "/hotel/update"},
          { subMenuTitle: "Delete Hotel", linkText: "/hotel/delete" },
        ]}
        toggleKey="hotelToggle"
      />

      <SidebarMenu
        menuTitle="User"
        utilityMenu={[
          { subMenuTitle: "User Permission", linkText: "/user/update" },
          { subMenuTitle: "Delete User", linkText: "/user/delete" },
        ]}
        toggleKey="userToggle"
      />

      <hr className="sidebar-divider" />

      <div className="text-center d-none d-md-inline">
        <Button color="light" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </ul>
  );
};

export default Sidebar;
