import React, { useState, createContext, useContext, useEffect } from "react";
import { useAuth } from "../components/AuthContext";

const LeaderboardContext = createContext();

export const useLeaderboard = () => {
  return useContext(LeaderboardContext);
};

const LeaderboardProvider = ({ children }) => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [updatedLeaderboard, setUpdatedLeaderboard] = useState(false)

  const sortedLeaderboard = leaderboardData.sort(
    (a, b) => a.moveCount - b.moveCount
  );

  useEffect(() => {
    sortLeaderboard();
  }, []);

  const sortLeaderboard = async () => {
    const response = await fetch("https://capstone-project-server-sage.vercel.app/getHighScores");
    const data = await response.json();
    setLeaderboardData(data);
    console.log(data);
  };

  return (
    <LeaderboardContext.Provider
      value={{
        leaderboardData,
        setLeaderboardData,
        sortedLeaderboard,
        sortLeaderboard,
      }}
    >
      {children}
    </LeaderboardContext.Provider>
  );
};

export default LeaderboardProvider;
