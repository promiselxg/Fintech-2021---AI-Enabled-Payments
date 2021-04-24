import React from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__logo"></div>
        <div className="header__link">
          <span>
            <Link to="/about">
              <p>About</p>
            </Link>
          </span>
          <span>
            <Link to="/register">
              <p>Register</p>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
