import React from "react";
import { Link, Redirect } from "react-router-dom";
import Nav from './Nav'
export default function Admin() {
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
      <h1>this is admin page only log in user</h1>

      {/* <Link>
        <button onClick={() => localStorage.removeItem("token")}>logout</button>
      </Link> */}
    </div>
  );
}
