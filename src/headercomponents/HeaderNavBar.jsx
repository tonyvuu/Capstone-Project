import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import logo from "../assets/icon_hacker.png";
import "../styles/HeaderNavBar.css";
import { useAuth } from "../components/AuthContext";

const HeaderNavBar = () => {
  const { isAuthenticated, username, logout } = useAuth();

  return (
    <div className="header-nav-bar">
      <div className="header-nav">
        <Navbar variant="dark">
          <Navbar.Brand className="navbar-title-icon" as={Link} to="/">
            <img className="image-title" src={logo} alt="Dev Town Logo" />
                DevTown Murder Mystery{" "}
          </Navbar.Brand>
          <Nav className="registration-login right-align">
            <Nav.Link as={Link} to="/leaderboard">
              Leaderboard
            </Nav.Link>
            {!isAuthenticated && (
              <>
                <Nav.Link as={Link} to="/registration">
                  Sign up
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
            {isAuthenticated && (
              <div>
                Welcome, {username}
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </Nav>
        </Navbar>
      </div>
      <br />
    </div>
  );
};

export default HeaderNavBar;