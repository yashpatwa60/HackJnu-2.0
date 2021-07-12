import React from "react";
import logo from "../../assets/img/logo.jpeg";

export default function Nav() {
  return (
    <nav className="navbar navStyle navbar-expand-lg">
      <div className=" navbar-collapse flex-grow-1 text-right" id="myNavbar">
        <ul className="navbar-nav ms-auto flex-nowrap">
          <li className="nav-item">
            <img src={logo} alt="" className="navImg" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
