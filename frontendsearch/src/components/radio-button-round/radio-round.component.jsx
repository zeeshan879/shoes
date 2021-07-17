import React, { useState } from "react";

import { Row } from "react-bootstrap";

import { Toggle } from "./radio.style";

const RoundRadio = ({ title, change, catagory, dbName, className }) => {
  const handleChange = (e) => {
    const value = e.target.checked;

    // console.log(dbName, value);
    const dependency = document.querySelectorAll(`.${dbName}`);

    dependency.forEach((el) => {
      // console.log(el);
      // el.click();
      // el.checked = !value;
      !el.checked && el.click();
    });
    test(value);
  };
  const test = (value) => {
    change(value, catagory, dbName);
  };
  return (
    <Row style={{ marginTop: "10px" }}>
      <div
        style={{
          padding: "1px",
          border: "2px Solid blue",
          height: "25px",
          width: "25px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          marginRight: "10px",
        }}
      >
        <Toggle
          type="checkbox"
          name={title}
          onChange={handleChange}
          value={catagory}
          dbName={dbName}
          className={className}
        />
      </div>
      <span>{title}</span>
    </Row>
  );
};

export default RoundRadio;
