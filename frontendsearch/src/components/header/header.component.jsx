import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "./header.styles";

const Header = () => {
  return (
    <Container>
      <Row>
        <Col lg={1} md="6" className="alignh">
          <Row>
            <Col>
              <p>NAME</p>
            </Col>
          </Row>
        </Col>
        <Col lg={2} md="6" className="alignh">
          <Row>
            <Col>
              <p>COLLECTION</p>
            </Col>
          </Row>
        </Col>
        <Col lg={2} md="6" className="alignh">
          <Row>
            <Col>
              <p>PHOTO</p>
            </Col>
          </Row>
        </Col>{" "}
        <Col lg={3} md="6" className="alignh">
          <Row>
            <Col></Col>
          </Row>
        </Col>{" "}
        <Col lg={2} md="6" className="alignh">
          <Row>
            <Col>
              <p>SAFETY PROPERTIES</p>
            </Col>
          </Row>
        </Col>{" "}
        <Col lg={2} md="6">
          <Row>
            <Col>
              <p className="palign">ADDITIONAL PROPERTIES </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
