import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderNavBar from "./components/HeaderNavBar";
import Leaderboard from "./components/Leaderboard";
import Login from "./components/Login";
import Registration from "./components/Registration";
import NavBarTabs from "./components/NavBarTabs";
import TitleScreen from "./components/TitleScreen";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import PoliceReport from "./components/PoliceReport";
import Rules from "./components/Rules";

export const CompletionBarContext = createContext();
export const PlayerAttemptsContext = createContext();

function App() {
  const [progress, setProgress] = useState(5);
  const [attempts, setAttempts] = useState(0);

  const updateAttempts = (increment) => {
    setAttempts(attempts + increment);
  };

  const updateProgress = (increment) => {
    setProgress(progress + increment);
  };

  return (
    <PlayerAttemptsContext.Provider value={{ attempts, updateAttempts }}>
      <CompletionBarContext.Provider value={{ progress, updateProgress }}>
        <div>
          <HeaderNavBar />
          <NavBarTabs />

          <Routes>
            <Route path="/" element={<TitleScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/police-report" element={<PoliceReport />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </div>
      </CompletionBarContext.Provider>
    </PlayerAttemptsContext.Provider>
  );
}

export default App;
