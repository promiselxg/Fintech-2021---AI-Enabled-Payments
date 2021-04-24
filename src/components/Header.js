import React from "react";
import "../style/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__logo"></div>
        <div className="header__link">
          <span>
            <p>About</p>
          </span>
          <span>
            <p>Login</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
