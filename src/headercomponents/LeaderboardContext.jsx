import React, { useState, createContext, useContext, useEffect } from "react";
import { useAuth } from "../components/AuthContext";



const LeaderboardContext = createContext()

export const useLeaderboard = () => {
  return useContext(LeaderboardContext)
}


const LeaderboardProvider = ({children}) => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const sortedLeaderboard = leaderboardData.sort(
    (a, b) => a.moveCount - b.moveCount
  );

  useEffect(() => {
    sortLeaderboard()
  },[]);

  const sortLeaderboard = async() => {
    const response = await fetch("http://localhost:3000/getHighScores");
    const data = await response.json()
    setLeaderboardData(data)
    console.log(data)
  }

  const {userData} = useAuth()

  // const grabSession = async () => {
  //   try {
  //     await fetch("http://localhost:3000/some-route");
  //     console.log('session is active');
  //   } catch (error) {
  //     console.error("Logout error:", error);
  //   }
  // };
  // const grabUser = () => {
  //   console.log(userData)
  // };

  const grabData = () => {
    
  }

  return (
    <LeaderboardContext.Provider value={{ leaderboardData, setLeaderboardData, sortedLeaderboard, sortLeaderboard }}>
      {children}
    </LeaderboardContext.Provider>
  );
};

export default LeaderboardProvider;
