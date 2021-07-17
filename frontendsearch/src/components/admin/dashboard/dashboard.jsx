import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { BiHome } from "react-icons/bi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import style from "../../admin/dashboard/dashboard.module.css";
import Result from "../../../components/results/results.component";
import { ShoeProvider } from "../../../context/filter.context";
import AddShoes from "../addshoes/addshoes";
import logo from "../../../1.jpeg";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Header1 from "../header";
import "./navbar.css";
class Dashboard extends Component {
  state = {};
  componentDidMount() {
    console.log(window.location.href);
  }
  render() {
    return (
      //   <div>
      //     <Row>
      //       <Col lg={2} className={style.leftmain}>
      //         <div className={style.buttonmain}>
      //           <div className={style.iconm}>
      //             <BiHome />
      //           </div>{" "}
      //           Dashboard{" "}
      //         </div>
      //         <div className={style.buttonmain}>
      //           <div className={style.iconm}>
      //             <IoIosAddCircleOutline color="white" />
      //           </div>{" "}
      //           Add Shoes{" "}
      //         </div>
      //         <div className={style.logoutmain}>
      //           <div className={style.buttonmain}>
      //             <div className={style.iconm}>
      //               <FiLogOut />
      //             </div>{" "}
      //             Logout{" "}
      //           </div>
      //         </div>
      //       </Col>
      //       <Col lg={10}>
      //         {/* <ShoeProvider>
      //                 <Result /></ShoeProvider> */}
      //         <AddShoes />
      //       </Col>
      //     </Row>
      //   </div>
      <div>
        {/* <div class="d-flex" id="wrapper">
          <div class="border-end bg-white" id="sidebar-wrapper">
            <div class="sidebar-heading border-bottom bg-light">
              Start Bootstrap
            </div>
            <div class="list-group list-group-flush">
              <a
                class="list-group-item list-group-item-action list-group-item-light p-3"
                href="#!"
              >
                Dashboard
              </a>
              <a
                class="list-group-item list-group-item-action list-group-item-light p-3"
                href="#!"
              >
                Shortcuts
              </a>
              <a
                class="list-group-item list-group-item-action list-group-item-light p-3"
                href="#!"
              >
                Overview
              </a>
              <a
                class="list-group-item list-group-item-action list-group-item-light p-3"
                href="#!"
              >
                Events
              </a>
              <a
                class="list-group-item list-group-item-action list-group-item-light p-3"
                href="#!"
              >
                Profile
              </a>
              <a
                class="list-group-item list-group-item-action list-group-item-light p-3"
                href="#!"
              >
                Status
              </a>
            </div>
          </div>{" "}
          <div id="page-content-wrapper">
            <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
              <div class="container-fluid">
                <button class="btn btn-primary" id="sidebarToggle">
                  Toggle Menu
                </button>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                      <a class="nav-link" href="#!">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#!">
                        Link
                      </a>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdown"
                      >
                        <a class="dropdown-item" href="#!">
                          Action
                        </a>
                        <a class="dropdown-item" href="#!">
                          Another action
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#!">
                          Something else here
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
           
          </div>
        </div> */}

        <Header1 />
        <Result />
      </div>
    );
  }
}

export default Dashboard;
