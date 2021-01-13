import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function Login() {
  const token = localStorage.getItem("token");

  let status = true;
  if (token === null) {
    status = false;
  }

  const [data, setData] = useState({
    username: "",
    password: "",
    status,
  });

  const onChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const submitFrom = (e) => {
    e.preventDefault();
    const { username, password } = data;
    if (username === "1" && password === "1") {
      localStorage.setItem("token", "qwertyuiop");
      setData({
        status: true,
      });
    }
  };

  if (data.status === true) {
    return <Redirect to="/admin" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitFrom}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={data.username}
          onChange={onChange}
        ></input>
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={data.password}
          onChange={onChange}
        ></input>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
