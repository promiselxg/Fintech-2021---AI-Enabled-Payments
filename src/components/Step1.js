import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";

const config = {
  header: {
    "Content-Type": "application/json",
  },
};
const Step1 = () => {
  const history = useHistory();
  const [firstname, setFirstName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstname || !dob || !address) {
      console.log("Please Fill out the Form");
    } else {
      axios.post("/generate", { firstname, dob, address }, config);
      history.push("/capture");
    }
  };

  return (
    <>
      <h1>User Registration</h1>
      <div className="form__input">
        <span>First Name</span>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstname}
        />
      </div>
      <div className="form__input">
        <span>Date of Birth - MM/DD/YYYY</span>
        <input
          type="text"
          onChange={(e) => setDob(e.target.value)}
          value={dob}
        />
      </div>
      <div className="form__input">
        <span>Address</span>
        <input
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
      </div>
      <div className="button">
        <Button color="primary" variant="contained" onClick={handleSubmit}>
          SAVE &amp; CONTINUE
        </Button>
      </div>
    </>
  );
};

export default Step1;
