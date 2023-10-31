import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const { email, password } = loginInfo;

  const inputChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  
  const handleLogin = async(e) => {
    e.preventDefault();
    console.log(loginInfo);

    await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });

    setLoginInfo({
      email: "",
      password: ""
    });
    navigate("/")

  };

  return (
    <div>

      {/* <button onClick={redirect}>Test Redirect</button> */}



      <h1>Login</h1>
      <Form onSubmit={(e) => handleLogin(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email or Username"
            name="email"
            value={email}
            onChange={(e) => inputChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => inputChange(e)}
          />
        </Form.Group>
        <Button className="custom-button" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
