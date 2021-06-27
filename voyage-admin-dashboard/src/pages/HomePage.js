import React, { useEffect } from "react";
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
import AdminPage from "./AdminPage";
import { getDocsCount } from "../actions/countActions";
import { getNextUsers } from "../actions/userActions";

const HomePage = () => {
  const userLogin = useSelector(state => state.userLogin);
  // const userList = useSelector(state => state.userList);
  const dispatch = useDispatch();
  const { userInfo, loading } = userLogin;

  useEffect(() => {
    if(userInfo) {
      dispatch(getDocsCount());
      dispatch(getNextUsers());
    }
  }, [userInfo, dispatch]);

  const history = useHistory();
  if(!userInfo) {
    history.push('/login');
  }

  return (
    <div>
      {loading && <Loader />}
      {userInfo && userInfo.userData?.isAdmin && <AdminPage />}
    </div>
  );
};

export default HomePage;
