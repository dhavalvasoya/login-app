import React from "react";
import Nav from "./Nav";
import { Redirect } from "react-router-dom";

export default function Content() {
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
      <h2>Content page</h2>
    </div>
  );
}
