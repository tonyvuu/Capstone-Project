import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { LeaderboardContext } from "../App";
import { useAuth } from "../components/AuthContext";

const Leaderboard = () => {
  const { leaderboardData } = useContext(LeaderboardContext);

  const sortedLeaderboard = leaderboardData.sort(
    (a, b) => a.moveCount - b.moveCount
  );

  const {userData} = useAuth()

  const grabSession = async () => {
    try {
      await fetch("http://localhost:3000/some-route");
      console.log('session is active');
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  const grabUser = () => {
    console.log(userData)
  };

  return (
    <div>
      <button onClick={grabSession}>session ?</button>
      <button onClick={grabUser}>User ?</button>
      Leaderboard
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Moves</th>
          </tr>
        </thead>
        <tbody>
          {sortedLeaderboard.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>Detective {entry.name}</td>
              <td>{entry.moveCount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Leaderboard;
