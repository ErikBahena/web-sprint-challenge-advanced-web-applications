import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const token = localStorage.getItem("token");

  if (token) {
    return <Route {...rest} component={Component} />;
  }

  if (!token) {
    return <Redirect to="/login" />;
  }
}

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute
