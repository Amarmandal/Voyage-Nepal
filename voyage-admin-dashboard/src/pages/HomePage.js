import React, { useEffect } from "react";
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import Loader from "../components/Loader";
import AdminPage from "./AdminPage";
import { getDocsCount } from "../actions/countActions";

const HomePage = () => {
  const userLogin = useSelector(state => state.userLogin);
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['token']);
  const { userInfo, loading } = userLogin;

  useEffect(() => {
    if(!userInfo) {
      return setCookie('token', null, { path: '/' });
    }
    setCookie('token', userInfo.token , { path: '/' })
  }, [userInfo, setCookie]);

  useEffect(() => {
    if(userInfo) {
      dispatch(getDocsCount());
    }
  }, [userInfo, setCookie, dispatch]);

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
