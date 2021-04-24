import React, { useState } from "react";

const Step1 = () => {
  const [firstname, setFirstName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (!firstname || !dob || !address) {
      console.log("Please Fill out the Form");
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
        <span>First Name</span>
        <input
          type="text"
          onChange={(e) => setDob(e.target.value)}
          value={dob}
        />
      </div>
      <div className="form__input">
        <span>First Name</span>
        <input
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
      </div>
    </>
  );
};

export default Step1;
