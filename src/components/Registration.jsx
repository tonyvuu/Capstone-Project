import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Registration = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, username, email, password } = newUser;

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
  };

  const inputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <div>
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
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={username}
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
            placeholder="Password"
            onChange={(e) => inputChange(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Registration;
