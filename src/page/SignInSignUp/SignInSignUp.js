import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
//rfc is love
//import whitelogo from "../../assets/original.png";
//import bluelogo from "../../assets/original (1).png";

export default function SigninSignUp(props) {
  const { setRefreshCheckLogin } = props;
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);
  const OpenModal = (content) => {
    setShowModal(true);
    setContentModal(content);
  };
  return (
    <div>
      <Container className="signin-signup" fluid>
        <Row>
          <LeftComponent />
        </Row>
      </Container>
    </div>
  );
}
function LeftComponent() {
  return (
    <Col className="signin-signup_left">
      <div>
        <h2>Unete</h2>
        <h2>Hora de Tweet</h2>
        <h2>Tweet</h2>
      </div>
    </Col>
  );
}
