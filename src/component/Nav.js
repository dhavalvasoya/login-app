import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  const navstyle = {
    color: "white",
    padding: "10px",
    textDecoration: "none",
  };

  return (
    <div className="Nav">
      <h2>logo</h2>
      <ui className="nav-links">
        <Link style={navstyle} to="/about">
          <li>About</li>
        </Link>

        <Link style={navstyle} to="/content">
          <li>content</li>
        </Link>
        <Link style={navstyle} to="/shop">
          <li>shop</li>
        </Link>
        <Link>
          <button
            className="BTN"
            onClick={() => localStorage.removeItem("token")}
          >
            logout
          </button>
        </Link>
      </ui>
    </div>
  );
}
