import React from "react";
import useField from "../hooks/useField";
import useSignup from "../hooks/useSignup";

const Signup = ({ setIsAuthenticated }) => {
  const { handleSignup } = useSignup(setIsAuthenticated);

  const name = useField("text");
  const email = useField("email");
  const password = useField("password");
  const phoneNumber = useField("tel");
  const gender = useField("text");
  const dateOfBirth = useField("date");
  const membershipStatus = useField("text");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSignup({
      name: name.value,
      email: email.value,
      password: password.value,
      phoneNumber: phoneNumber.value,
      gender: gender.value,
      dateOfBirth: dateOfBirth.value,
      membershipStatus: membershipStatus.value,
    });
  };

  return (
    <div className="create">
      <h2>Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input {...name} />
        <label>Email address:</label>
        <input {...email} />
        <label>Password:</label>
        <input {...password} />
        <label>Phone Number:</label>
        <input {...phoneNumber} />
        <label>Gender:</label>
        <input {...gender} />
        <label>Date of Birth:</label>
        <input {...dateOfBirth} />
        <label>Membership Status:</label>
        <input {...membershipStatus} />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
