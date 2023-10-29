import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, { useState, createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Newspaper from "./components/Newspaper";
import PoliceReport from "./components/PoliceReport";
import Rules from "./components/Rules";
import Leaderboard from "./components/Leaderboard";
import Login from "./components/Login";
import Registration from "./components/Registration";
import TitleScreen from "./components/TitleScreen";
import NavBarTabs from "./components/NavBarTabs";
import logo from "./icon_hacker.png"

export const CompletionBarContext = createContext();

function App() {
  const [progress, setProgress] = useState(5);

  const updateProgress = (increment) => {
    setProgress(progress + increment);
  };

  return (
    <CompletionBarContext.Provider value={{ progress, updateProgress }}>
      <div>
        <div className="header-nav">
          <Navbar variant="dark">
            <Navbar.Brand className="navbar-title-icon" style={{fontFamily: "Roboto Slab"}} as={Link} to="/">
              DevTown Murder Mystery{" "}
              <img
                className="image-title"
                src={logo}
                alt="Dev Town Logo"
              />
            </Navbar.Brand>
            <Nav className="registration-login right-align">
              <Nav.Link as={Link} to="/leaderboard">
                Leaderboard
              </Nav.Link>
              <Nav.Link as={Link} to="/registration">
                Sign up
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar>
        </div>

        <NavBarTabs />

        <Routes>
          <Route path="/" element={<TitleScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/newspaper" element={<Newspaper />} />
          <Route path="/police-report" element={<PoliceReport />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>

      </div>
    </CompletionBarContext.Provider>
  );
}

export default App;
