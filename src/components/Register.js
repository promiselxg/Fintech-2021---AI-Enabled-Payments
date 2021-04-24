import React from "react";
import { Button } from "@material-ui/core";
import "../style/Register.css";
const Register = () => {
  return (
    <div className="register">
      <div className="body__inner">
        <div className="register__container">
          <div className="register__app">
            <h1>User Registration</h1>
            <form action="">
              <div className="form__input">
                <span>First Name</span>
                <input type="text" />
              </div>
              <div className="form__input">
                <span>First Name</span>
                <input type="text" />
              </div>
              <div className="form__input">
                <span>First Name</span>
                <input type="text" />
              </div>
              <div className="button">
                <Button color="primary" variant="contained">
                  Next
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
