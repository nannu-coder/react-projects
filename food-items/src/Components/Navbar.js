import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../images/logo.svg";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
