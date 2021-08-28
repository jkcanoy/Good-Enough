import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const styleList = {
  listStyleType: 'none',
  margin: '0px',
  padding: '0px',
}
const styleLogo = {
  width: 'auto',
  height:'60px',
}

const styleNav = {
  display: 'flex',
  alignItems: 'center',
}

const styleLink = {
  padding: '.25em'
}

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row" style={styleList}>
          <li className="mx-1" style={styleLink}>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          <li className="mx-1" style={styleLink}>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row" style={styleList}>
          <li className="mx-1" style={styleLink}>
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1" style={styleLink}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <img src="./Logo.png" alt="logo" style={styleLogo}/>
        </Link>
      </h1>

      <nav style={styleNav}>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
