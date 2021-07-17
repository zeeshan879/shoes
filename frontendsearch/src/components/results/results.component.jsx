import React from "react";

import Header from "../header/header.component";

import Shoe from "../Shoe/shoe.component";

import { Container } from "./results.style";

import { ShoeContext } from "../../context/filter.context";
import axios from "axios";

class Result extends React.Component {
  static contextType = ShoeContext;

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {};
  }
  componentDidMount() {
    const { changeShoe, changeFetched } = this.context;

    async function fetchAd() {
      axios
        .get("/shoes/get-all-shoes")
        .then(function (response) {
          console.log(response.data);
          changeShoe(response.data);
          changeFetched(response.data);
        })
        .catch(function (error) {
          //console.log(error);
        })
        .then(function () {});
    }
    fetchAd();
  }

  render() {
    const { shoes, changeShoe } = this.context;

    return (
      <Container>
        <Header />
        {shoes.length
          ? shoes.map((value, index) => <Shoe key={index} value={value}></Shoe>)
          : null}
      </Container>
    );
  }
}

export default Result;
