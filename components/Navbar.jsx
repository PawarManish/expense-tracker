import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ className }) => {
  return (
    <div className="Navbar">
      <div className="AppNameHome">
        📒 Expense <span>Tracker</span>
      </div>
      <div className="linksDiv">
        <NavLink className="links" to="/">
          Home
        </NavLink>
        <NavLink className="links" to="/all-expense">
          ExpenseList
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
