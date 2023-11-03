import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "../styles/Registration.css";

const Registration = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { firstName, lastName , email, password } = newUser;

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(newUser);

    await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    setNewUser({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    });
    navigate("/login");
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
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => inputChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => inputChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Re-enter password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            placeholder="Re-enter password"
            onChange={(e) => inputChange(e)}
          />
        </Form.Group>
          <Button className="custom-button" type="submit">
            Sign up
          </Button>
        </Form>
        <br />
        <p className="terms-policy">
        By signing up, you agree to our{" "}
        <span className="terms">Terms of Service</span> and{" "}
        <span className="terms">Privacy Policy</span>.
      </p>
      </div>
    </div>
  );
};

export default Registration;
