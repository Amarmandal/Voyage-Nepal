import React from "react";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "../components/Sidebar";

const PlacePage = () => {
  return (
    <Container fluid="true">
      <Row className="me-0">
        <Col md={{ size: 2 }}>
          <Sidebar />
        </Col>
        <Col md={{ size: 10 }} className="px-4 py-4">
          <h1>Place Page</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default PlacePage;
