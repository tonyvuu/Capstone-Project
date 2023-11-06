import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Registration.css";

const Registration = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    reenterpassword: "",
  });

  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const navigate = useNavigate();

  const { firstName, lastName, email, password, reenterpassword } = newUser;
  const minLength = 6;
  const maxLength = 20;

  const handleRegister = async (e) => {
    e.preventDefault();

    if (reenterpassword !== password) {
      const passwordInput = document.getElementById("formBasicPassword");
      const reenterpasswordInput = document.getElementById(
        "formBasicReenterPassword"
      );
      const passwordLabel = document.getElementById("password-label");
      const reenterpasswordLabel = document.getElementById(
        "reenterpassword-label"
      );

      setPasswordError("Passwords do not match");
      passwordInput.style.border = "1px solid red";
      reenterpasswordInput.style.border = "1px solid red";
      setTimeout(() => {
        setPasswordError("");
        passwordInput.style.border = "1px solid #555";
        reenterpasswordInput.style.border = "1px solid #555";
        passwordLabel.style.color = "#ff6a00"
        reenterpasswordLabel.style.color = "#ff6a00"
      }, 2500);
      passwordLabel.style.color = "red";
      reenterpasswordLabel.style.color = "red";
    } else if (firstName.length < 2 || firstName.length > 30) {
      setFirstNameError("First name should be between 2 and 30 characters");
      setTimeout(() => {
        setFirstNameError("");
      }, 2500);
    } else if (!/^[A-Za-z]+( [A-Za-z]+)?$/.test(firstName)) {
      setFirstNameError("First name should only contain letters and at most one space");
      setTimeout(() => {
        setFirstNameError("");
      }, 2500);
    } else if (lastName.length < 2 || lastName.length > 30) {
      setLastNameError("Last name should be between 2 and 30 characters");
      setTimeout(() => {
        setLastNameError("");
      }, 2500);
    } else if (!/^[A-Za-z]+( [A-Za-z]+)?$/.test(lastName)) {
      setLastNameError("Last name should only contain letters and at most one space");
      setTimeout(() => {
        setLastNameError("");
      }, 2500);
    } else if (email.trim() === "") {
      setEmailError("Email address cannot be empty");
      setTimeout(() => {
        setEmailError("");
      }, 2500);
    } else if (password.trim() === "") {
      setPasswordError("Password cannot be blank");
      setTimeout(() => {
        setPasswordError("");
      }, 2500);
    } else if (password.length < minLength || password.length > maxLength ) {
      setPasswordError("Password should be between 6 and 20 characters");
      setTimeout(() => {
        setPasswordError("");
      }, 2500);
    } else {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        setEmailError("Email already exists");
        const emailInput = document.getElementById("formBasicEmail");
        const emailLabel = document.getElementById("email-label");
        emailInput.style.borderColor = "red";
        emailLabel.style.color = "red";

        console.error("Fetch error:", response.status, response.statusText);
      } else {
        setNewUser({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          reenterpassword: "",
        });
        navigate("/login");
      }
    }
  };

  const inputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="registration-page">
      <div className="registration-container">
        <h2>Registration</h2>
        <br />
        <Form onSubmit={(e) => handleRegister(e)}>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={firstName}
              placeholder="Enter first name"
              onChange={(e) => inputChange(e)}
            />
            {firstNameError && <div className="error">{firstNameError}</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Enter last name"
              onChange={(e) => inputChange(e)}
            />
            {lastNameError && <div className="error">{lastNameError}</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="email-label">Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => inputChange(e)}
            />
          </Form.Group>
          {emailError && (
            <h6 style={{ textAlign: "center" }} className="error">
              {emailError}
            </h6>
          )}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label id="password-label">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => inputChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicReenterPassword">
            <Form.Label id="reenterpassword-label">
              Re-enter password
            </Form.Label>
            <Form.Control
              type="password"
              name="reenterpassword"
              value={reenterpassword}
              placeholder="Re-enter password"
              onChange={(e) => inputChange(e)}
            />
          </Form.Group>
          {passwordError && (
            <h6 style={{ textAlign: "center" }} className="error">
              {passwordError}
            </h6>
          )}
          <Button className="custom-button" type="submit">
            Sign up
          </Button>
        </Form>
        <br />
        <p className="terms-policy">
          By signing up, you agree to our{" "}
          <Link to="/termsofservice" target="_blank" className="terms">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacypolicy" target="_blank" className="terms">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Registration;
