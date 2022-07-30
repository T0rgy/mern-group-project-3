import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import "./css/style.css";
function NavBar() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
<div>
            <Link className="link" to="/menu">
              Menu
            </Link>
            <Link className="link"  to="/about">
              About
            </Link>
            <Link className="link"  to="/cart">
              Cart
            </Link>
          
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a className="link"  href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
            </div>
      )
    } else {
      return (
        <div>
            <Link className="link"  to="/signup">
              Signup
            </Link>
            <Link className="link"  to="/login">
              Login
            </Link>
            </div>
      );
    }
  }

  return (
    <header className="flex-row px-1==">
  
      <nav className="topnav">
        <Link to="/">
          <span role="img" aria-label="shopping bag">Cup of Code</span>
        </Link>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default NavBar;
