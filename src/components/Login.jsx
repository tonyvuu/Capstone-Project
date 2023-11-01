import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import '../styles/Login.css'


const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const { email, password } = loginInfo;

  const inputChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(loginInfo);

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      if (response.status === 200) {
        // Login was successful
        const user = await response.json();
        console.log("Login Successful");
        login(user.username);
        navigate("/");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="login-page"> 
      <div className="login-container">

      <h2>Login</h2>
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
          Sign in 
        </Button>
      </Form>
      <br />
        <p className="forgot-password">Forgot your password?</p>
      </div>
    </div>
  );
};

export default Login;
