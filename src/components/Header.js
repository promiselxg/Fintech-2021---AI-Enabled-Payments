import React from "react";
import { Container, Button } from "@material-ui/core";
import "../style/Header.css";
import Welcome from "../image/wallet.svg";
const Header = () => {
  return (
    <header className="app__header">
      <Container maxWidth="lg">
        <div className="app__headerTop">
          <div className="app__topLeft">
            <h1>UNIQID</h1>
            <p>Empower the unbanked</p>
          </div>
          <div className="app__topRight">
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Register</h2>
          </div>
        </div>
        <div className="app__header__container">
          <div className="app__containerLeft">
            <h1>Let's Empower the UNBANKED</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nisi
              dolores ad earum modi nostrum fuga natus exercitationem laudantium
              non, quis, fugit provident cumque libero cupiditate perferendis
              repudiandae labore in alias sequi perspiciatis eaque illum.
              Perferendis quibusdam porro iusto saepe?
            </p>
            <Button variant="contained">Get Started</Button>
          </div>
          <div className="app__containerRight">
            <img src={Welcome} alt="uniqID" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
