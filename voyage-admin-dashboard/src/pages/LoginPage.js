import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { toast } from "react-toastify";
import { Container } from "reactstrap";


import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const userLogin = useSelector(state => state.userLogin);
  const {error, userInfo} = userLogin;

  useEffect(() => {
    if(error) {
      toast(error, {
        type: 'error'
      })
    }
  }, [error]);

  const performRedirect = () => {
    return <Redirect to="/" />
  }

  return (
    <Container fluid="true">
      {userInfo?.token && performRedirect()}
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
