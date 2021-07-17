import React, { useEffect, useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ShoeContext } from "../../context/filter.context";
import { Container } from "./shoe.styles";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";
import { HashLink } from "react-router-hash-link";
const Shoe = ({ value }) => {
  const contextType = useContext(ShoeContext);
  const [flag, setFlag] = useState(false);
  const [value2, setValue2] = useState(null);
  const [path, setPath] = useState(null);
  useEffect(() => {
    setPath(window.location.pathname);
    console.log("pathbname", path);
  }, []);
  const changeShoe = async (value1) => {
    console.log(value1._id);
    try {
      let response = await axios.delete(
        "/shoes/delete-shoes/" + JSON.stringify(value1)
      );
      window.location.reload();
      console.log(response.data);
      contextType.changeShoe(response.data);
      contextType.changeFetched(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const changeUpdate = async (value2) => {
    console.log(value2, "dfggg");
    contextType.handleupdate(value2);
    setFlag(true);
    setValue2(value2);
  };
  if (flag) return <Redirect to={{ pathname: "/update", state: value2 }} />;
  else
    return (
      <Container>
        {path == "/admindashboard" && (
          <div>
            <div>
              <HashLink
                onClick={() => changeShoe(value)}
                style={{ margin: " 0px 30px" }}
              >
                <AiFillCloseCircle size={30} />
              </HashLink>
              <HashLink onClick={() => changeUpdate(value)}>
                <HiPencilAlt size={30} />
              </HashLink>
            </div>
          </div>
        )}

        <Row>
          <Col lg={1} md="6" className="alignv">
            <Row>
              <Col>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    textTransform: "capitalize",
                  }}
                >
                  {value.name}
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={2} md="6" className="alignv">
            <Row>
              <Col>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                  }}
                >
                  {value.shoesCollection}
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={2} md="6" className="alignv">
            <Row>
              <Col>
                <img
                  src={`https://shoe-backend.herokuapp.com/${value.image}`}
                  alt="shoe "
                ></img>
              </Col>
            </Row>
          </Col>
          <Col lg={3} md="6" className="alignv">
            <Row>
              <Col>
                <Row>
                  <Row
                    className="props"
                    style={{ fontSize: "16px", fontWeight: "500" }}
                  >
                    <Col>
                      <p>Norm</p>
                    </Col>
                    <Col>
                      <Row>
                        {Object.keys(value.norm).map(
                          (key, index) =>
                            value.norm[key] === true && <p> {key} </p>
                        )}
                      </Row>
                    </Col>
                  </Row>
                  <Row
                    className="props"
                    style={{ fontSize: "16px", fontWeight: "500" }}
                  >
                    <Col>
                      <p>Shoe Type</p>
                    </Col>
                    <Col>
                      <Row>
                        {Object.keys(value.types).map(
                          (key, index) =>
                            value.types[key] === true && <p> {key} </p>
                        )}
                      </Row>
                    </Col>
                  </Row>
                  <Row
                    className="props"
                    style={{ fontSize: "16px", fontWeight: "500" }}
                  >
                    <Col>
                      <p>Fixing</p>
                    </Col>
                    <Col>
                      <Row>
                        {Object.keys(value.fixing).map(
                          (key, index) =>
                            value.fixing[key] === true && <p> {key} </p>
                        )}
                      </Row>
                    </Col>
                  </Row>
                  <Row
                    className="props"
                    style={{ fontSize: "16px", fontWeight: "500" }}
                  >
                    <Col>
                      <p>Upper</p>
                    </Col>
                    <Col>
                      <Row>
                        {Object.keys(value.upper).map(
                          (key, index) =>
                            value.upper[key] === true && <p> {key} </p>
                        )}
                      </Row>
                    </Col>
                  </Row>
                  <Row
                    className="props"
                    style={{ fontSize: "16px", fontWeight: "500" }}
                  >
                    <Col>
                      <p>Toe Cup</p>
                    </Col>
                    <Col>
                      <Row>
                        {Object.keys(value.toeCap).map(
                          (key, index) =>
                            value.toeCap[key] === true && <p> {key} </p>
                        )}
                      </Row>
                    </Col>
                  </Row>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col lg="2" md="6" className="alignv">
            <Row style={{ textAlign: "center" }}>
              <Col>
                {Object.keys(value.safetyProperties).map(
                  (key, index) =>
                    value.safetyProperties[key] === true && (
                      <Row className="d-flex justify-content-center">
                        <p style={{ fontSize: "20px", fontWeight: "700" }}>
                          {" "}
                          {key}{" "}
                        </p>{" "}
                      </Row>
                    )
                )}
              </Col>
            </Row>
          </Col>
          <Col lg="2" md="6" className="alignv">
            <Row style={{ textAlign: "center" }}>
              <Col>
                {Object.keys(value.additionalProperties).map(
                  (key, index) =>
                    value.additionalProperties[key] === true && (
                      <Row className="d-flex justify-content-center">
                        <p style={{ fontSize: "20px", fontWeight: "500" }}>
                          {" "}
                          {key}{" "}
                        </p>{" "}
                      </Row>
                    )
                )}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={5}></Col>
          <Col lg={6}>
            <div>
              {" "}
              <button className="threebusrtle">TECHNICAL CARD</button>{" "}
              <button className="threebusrtle">CERTIFICATION</button>{" "}
              <button className="threebusrtle">PHOTOS</button>
            </div>
          </Col>
        </Row>

        <hr style={{ height: "2px", color: "black" }} />
      </Container>
    );
};

export default Shoe;
