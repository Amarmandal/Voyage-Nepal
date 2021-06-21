import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  FormGroup,
  Input,
  Button,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  Form,
  Label,
} from "reactstrap";

import Logo from "../assets/images/logo.png";
import "./LoginForm.css";
import { login } from "../actions/userActions";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Row className="mx-0" id="login-form">
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Card className="align-items-center">
          <CardImg top width="100%" src={Logo} alt="Card Image cap" />
          <CardBody>
            <Form>
              <FormGroup>
                <Label htmlFor="user-email" className="my-1 ms-2">
                  Email
                </Label>
                <Input
                  type="text"
                  id="user-email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="user-password" className="my-1 ms-2">
                  Password
                </Label>
                <Input
                  type="password"
                  id="user-password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <span className="forget-password-text float-end my-1 display-block">
                  Forgot your password?
                </span>
              </FormGroup>
              <Button onClick={handleLogin}>Sign In</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginForm;
