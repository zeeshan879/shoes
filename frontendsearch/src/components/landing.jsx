import React, { Component } from "react";
import Filter from "./filter/filter.component";
import Result from "./results/results.component";
import { ShoeProvider } from "../context/filter.context";
class landing extends Component {
  state = {};
  render() {
    return (
      <ShoeProvider>
        <Filter />
        <Result />
      </ShoeProvider>
    );
  }
}

export default landing;
