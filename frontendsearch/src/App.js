import "./App.css";

import Filter from "./components/filter/filter.component";
import Result from "./components/results/results.component";
import { ShoeProvider } from "./context/filter.context";
import { Route, Switch, Redirect } from "react-router-dom";
import UpdateShoe from "./components/admin/updateShoe";
import AdminLogin from "./components/admin/adminlogin/AdminLogin";
import Dashboard from "./components/admin/dashboard/dashboard";
import landing from "./components/landing";
import AddShoes from "./components/admin/addshoes/addshoes";
import { ShoeContext } from "./context/filter.context";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
function App() {
  axios.defaults.baseURL = "https://shoe-backend.herokuapp.com/";
  // axios.defaults.baseURL = "http://localhost:9000";
  const contextType = ShoeContext;
  const [token1, setToken] = useState(localStorage.getItem("token"));
  console.log("in app.js ", contextType.token1);

  useEffect(async () => {
    console.log("ttt", localStorage.getItem("token"));
    const token = (await localStorage.getItem("token"))
      ? localStorage.getItem("token")
      : null;
    setToken(token);
  }, [contextType.token1]);

  return (
    <>
      {" "}
      <div>
        <Switch>
          <Route
            path="/admindashboard"
            render={() => {
              console.log(token1);
              if (token1 != null) {
                return <Dashboard />;
              } else {
                return <Redirect to="/login" />;
              }
            }}
          />
          <Route
            path="/update"
            render={() => {
              console.log(token1);
              if (token1 != null) {
                return <UpdateShoe />;
              } else {
                return <Redirect to="/login" />;
              }
            }}
          />
          <Route
            path="/addshoes"
            render={() => {
              console.log(token1);
              if (token1 != null) {
                return <AddShoes />;
              } else {
                return <Redirect to="/login" />;
              }
            }}
          />
          {/* {token ? (
          <Route exact padth="/update" component={UpdateShoe} />
        ) : (
          <Route exact path="/admin" component={AdminLogin} />
        )} */}
          <Route exact path="/login" component={AdminLogin} />
          <Route exact padth="/" component={landing} />
        </Switch>
      </div>
    </>
  );
}

export default App;
