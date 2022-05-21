import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <NavLink className="link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="link " to="/pages">
          Page
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/login">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/services">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/faq">
          Home
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-primary lg:px-10">
        <div className="navbar-start">
          <Link className="btn btn-ghost normal-case text-xl" to="\">
            Construction Tools
          </Link>
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
