import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import '../styles/Login.css'

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); 

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
      const response = await fetch("https://capstone-project-server-sage.vercel.app", {
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
        login(user.returningUser);
        console.log(user);
        navigate("/");
      } else if (response.status === 404) {
        // Email not found in the database
        setError("Email not found in the database");
      } else {
        setError("Login failed. Please check your credentials."); 
        console.error("Login failed");
      }
    } catch (error) {
      setError("An error occurred during login. Please try again later.");
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
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => inputChange(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={(e) => inputChange(e)}
            />
          </Form.Group>
          {error && (
            <div className="error-message">{error}</div>
          )}
          <Button className="custom-button" type="submit">
            Sign in
          </Button>
        </Form>
        <br />
        {/* <p className="forgot-password">Forgot your password?</p> */}
      </div>
    </div>
  );
};



export default Login;
