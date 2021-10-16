// import React from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/bars-solid.svg";

const Nav = ({ menuStatus, setMenuStatus }) => {
  const displayMenu = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <nav>
      <img src={logo} alt="logo" className="logo" />
      <img
        onClick={displayMenu}
        src={hamburger}
        alt="hamburger"
        className="hamburger"
      />
      <div className={`menu ${menuStatus ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
        <div className="login-signup">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
