import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, { useState, createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import NavBarTabs from "./components/NavBarTabs";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Newspaper from "./components/Newspaper";
import PoliceReport from "./components/PoliceReport";
import Rules from "./components/Rules";
import Leaderboard from "./components/Leaderboard";
import Login from "./components/Login";
import Registration from "./components/Registration";
import TitleScreen from "./components/TitleScreen";
import CompletionBar from "./components/CompletionBar";
import Nav from 'react-bootstrap/Nav';

export const CompletionBarContext = createContext();

function App() {
  const [progress, setProgress] = useState(0);

  const updateProgress = (increment) => {
    setProgress(progress + increment);
  };

  return (
    <CompletionBarContext.Provider value={{ progress, updateProgress }}>
      <div>
      <Navbar variant="dark">
            <Navbar.Brand className='navbar-title-icon' as={Link} to="/home">
              DevTown Murdery Mystery <img className='image-title' src="https://www.mailordermystery.com/cdn/shop/products/SPIES-Product-Image_1024x.gif?v=1586973228" alt="Spotify Logo" />
            </Navbar.Brand>
            <Nav className="registration-login">
              <Nav.Link as={Link} to="/registration">
                Sign up
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
        </Navbar>
      <div className="title-text">
            <h1>DevTown Murder Mystery</h1>
          </div>
        <Stack direction="horizontal" gap={3}>
          {/* <Leaderboard /> */}
          {/* <Login /> */}
          {/* <Registration /> */}
        </Stack>

        <NavBarTabs />

        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/newspaper" element={<Newspaper />} />
          <Route path="/police-report" element={<PoliceReport />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>

        <div>
          <TitleScreen />
          {/* <CompletionBar /> */}
        </div>
      </div>
    </CompletionBarContext.Provider>
  );
}

export default App;
