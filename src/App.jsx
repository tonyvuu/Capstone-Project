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
          {/* <TitleScreen /> */}
          <NavBarTabs />

          <Routes>
            <Route path="/" element={<TitleScreen />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </div>
      </CompletionBarContext.Provider>
    </PlayerAttemptsContext.Provider>
  );
}

export default App;
