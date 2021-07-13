import React from "react";
import logo from "../../assets/img/logo.jpeg";

export default function Navbar() {
  return (
    <nav className="navbar navStyle navbar-expand-lg">
      <div className="navbar-collapse flex-grow-1 text-right" id="myNavbar">
        <ul className="navbar-nav ms-auto flex-nowrap">
          <li className="nav-item">
            <h1>Home</h1>
          </li>
        </ul>
      </div>
    </nav>
  );
}
