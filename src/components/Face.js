import React from "react";
import "../style/Register.css";
import Pics from "../Images/selfie.svg";
import "../style/Face.css";
const Face = () => {
  return (
    <>
      <div className="face">
        <h1>face recognition</h1>
        <img src={Pics} alt="face recognition" />
      </div>
    </>
  );
};

export default Face;
