import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button } from "reactstrap";
import { toast } from "react-toastify";
import { register } from "../actions/userActions";

const ActivateAccount = () => {
  const query = new URLSearchParams(window.location.search);
  const token = query.get("token");
  const dispatch = useDispatch();
  const { registerInfo, loading, error, success } = useSelector(
    (state) => state.userRegister
  );

  const handleOnActivate = () => {
    dispatch(register(token));
  };

  return (
    <Container className="my-5 py-5">
      <Button color="primary" onClick={handleOnActivate}>
        Activate Now
      </Button>
      {!loading && success &&
        registerInfo?.id &&
        toast("User Successfully Activated", { type: "success" })}
      {!loading && error && toast(error, { type: "error" })}
    </Container>
  );
};

export default ActivateAccount;
