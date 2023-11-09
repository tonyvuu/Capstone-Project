import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderNavBar from "./headercomponents/HeaderNavBar";
import LeaderboardProvider from "./headercomponents/LeaderboardContext"
import Login from "./headercomponents/Login";
import Registration from "./headercomponents/Registration";
import TitleScreen from "./components/TitleScreen";
import AuthProvider from "./components/AuthContext";
import GameScreen from "./components/GameScreen";
import LeaderboardTable from "./components/LeaderboardTable"
import GameOver from "./components/GameOver";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import Timer from './components/Timer'
import Footer from "./headercomponents/Footer";

export const CompletionBarContext = createContext();
export const MoveCountContext = createContext();

function App() {
  const [progress, setProgress] = useState(1);
  const [moveCount, setMoveCount] = useState(0);

  const updateMoveCount = (increment) => {
    setMoveCount(moveCount + increment);
  };

  const updateProgress = (increment) => {
    setProgress(progress + increment);
  };

  return (
    <AuthProvider>
      <LeaderboardProvider>
        <CompletionBarContext.Provider value={{ progress, updateProgress, setProgress }}>
          <MoveCountContext.Provider value={{ moveCount, updateMoveCount, setMoveCount }}>
            <div>
              <HeaderNavBar />
              <Routes>
                <Route path="/" element={<TitleScreen />} />
                <Route path="/leaderboard" element={<LeaderboardTable />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/game" element={<GameScreen />} />
                <Route path="/gameover" element={<GameOver />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/termsofservice" element={<TermsOfService />} />

              </Routes>
              <Footer />
            </div>
          </MoveCountContext.Provider>
        </CompletionBarContext.Provider>
        </LeaderboardProvider>
    </AuthProvider>
  );
}

export default App;
