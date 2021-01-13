import React from "react";
import Nav from "./Nav";
import {Redirect} from 'react-router-dom'
export default function Shop() {
  const token = localStorage.getItem("token");

  let status = true;
  if (token === null) {
    status = false;
  }

  if (status === false) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <Nav />
      <h3>shop page</h3>
    </div>
  );
}
