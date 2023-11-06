import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderNavBar from "./headercomponents/HeaderNavBar";
import Leaderboard from "./headercomponents/Leaderboard";
import Login from "./headercomponents/Login";
import Registration from "./headercomponents/Registration";
import TitleScreen from "./components/TitleScreen";
import AuthProvider from "./components/AuthContext";
import GameScreen from "./components/GameScreen";
import GameOver from "./components/GameOver";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

export const LeaderboardContext = createContext();
export const CompletionBarContext = createContext();
export const MoveCountContext = createContext();

function App() {
  const [progress, setProgress] = useState(1);
  const [moveCount, setMoveCount] = useState(0);
  const [leaderboardData, setLeaderboardData] = useState([]);

  const updateMoveCount = (increment) => {
    setMoveCount(moveCount + increment);
  };

  const updateProgress = (increment) => {
    setProgress(progress + increment);
  };

  return (
    <AuthProvider>
      <LeaderboardContext.Provider
        value={{ leaderboardData, setLeaderboardData }}
      >
        <CompletionBarContext.Provider value={{ progress, updateProgress }}>
          <MoveCountContext.Provider value={{ moveCount, updateMoveCount }}>
            <div>
              <HeaderNavBar />
              <Routes>
                <Route path="/" element={<TitleScreen />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/game" element={<GameScreen />} />
                <Route path="/gameover" element={<GameOver />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/termsofservice" element={<TermsOfService />} />

              </Routes>
            </div>
          </MoveCountContext.Provider>
        </CompletionBarContext.Provider>
      </LeaderboardContext.Provider>
    </AuthProvider>
  );
}

export default App;
