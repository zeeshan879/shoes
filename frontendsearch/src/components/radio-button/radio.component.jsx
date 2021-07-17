import React, { useState } from "react";

import { Row } from "react-bootstrap";

import { Toggle } from "./radio.style";

const Radio = ({ title, change, catagory, dbName, className }) => {
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
      <div>
        {" "}
        <Toggle
          type="checkbox"
          name={title}
          onChange={handleChange}
          value={catagory}
          dbName={dbName}
          className={className}
        />
      </div>

      <div>{title}</div>
    </Row>
  );
};

export default Radio;
