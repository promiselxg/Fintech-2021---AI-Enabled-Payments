import React from "react";
import selfie from "../Images/rain.svg";
import "../style/Body.css";
import { Button } from "@material-ui/core";

const Body = () => {
  return (
    <div className="app__body">
      <div className="body__inner">
        <div className="body__content">
          <div className="body__left">
            <h1>Promise ID</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis consequatur illum error facilis labore doloremque
              maiores totam ad, maxime aliquid est facere, deserunt odit quod
              dolorum! Eveniet harum impedit perspiciatis.
            </p>
            <Button color="primary" variant="contained">
              GET STARTED
            </Button>
          </div>
          <div className="body__right">
            <img src={selfie} alt="imag" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
