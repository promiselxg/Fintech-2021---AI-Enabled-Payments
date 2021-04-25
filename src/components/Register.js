import React from "react";
import "../style/Register.css";
import Step1 from "./Step1";

const Register = () => {
  return (
    <div className="register">
      <div className="body__inner">
        <div className="register__container">
          <div className="register__app">
            <form>
              <Step1 />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
