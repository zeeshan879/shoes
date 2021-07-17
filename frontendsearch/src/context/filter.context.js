import React, { createContext, useEffect, useState } from "react";

import _ from "lodash";

export const ShoeContext = createContext();

export const ShoeProvider = (props) => {
  const [shoes, setShoes] = useState([]);
  const [fetched, setFetched] = useState([]);
  const [wFrom, setWfrom] = useState(0);
  const [sFrom, setSfrom] = useState(0);
  const [wTo, setWTo] = useState(100);
  const [sTo, setSTo] = useState(100);
  const [filterd, setFilterd] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [text, setText] = useState([]);
  const [token, setToken] = useState(null);
  const [update, setUpdate] = useState(null);
  useEffect(() => {}, []);

  const spreadSort = (f) => {
    setSorted((sorted) => [...sorted, f]);
    console.log("called");
  };
  const textch = () => {
    setText((text = "hello"));
  };
  const handletoken = (e) => {
    console.log("in handel token");
    setToken(e);
  };
  const changeSort = (f) => {
    setSorted((sorted) => [...sorted, f]);
  };

  const handleFilterd = (el) => {
    setFilterd([...filterd, el]);
  };

  const changeWto = (e) => {
    console.log(e.target.value);
    setWTo(e.target.value);
  };

  const changeWfrom = (e) => {
    console.log(e.target.value);
    setWfrom(e.target.value);
  };
  const changeSto = (e) => {
    console.log(e.target.value);
    setSTo(e.target.value);
  };
  const changesFrom = (e) => {
    console.log(e.target.value);
    setSfrom(e.target.value);
  };

  const changeShoe = (prop) => {
    setShoes(prop);
  };

  const changeFetched = (prop) => {
    setFetched(prop);
    console.log(prop);
  };
  const handleupdate = (prop) => {
    setUpdate(prop);
  };
  return (
    <ShoeContext.Provider
      value={{
        shoes,
        changeShoe,
        fetched,
        changeFetched,
        wFrom,
        wTo,
        sFrom,
        sTo,
        changeSto,
        changeWfrom,
        changesFrom,
        changeWto,
        handleFilterd,
        filterd,
        sorted,
        spreadSort,
        changeSort,
        token1: token,
        handletoken1: handletoken,
        update,
        handleupdate,
      }}
    >
      {props.children}
    </ShoeContext.Provider>
  );
};
