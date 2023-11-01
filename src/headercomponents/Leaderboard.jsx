import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { LeaderboardContext } from "../App";

const Leaderboard = () => {
  const { leaderboardData } = useContext(LeaderboardContext);

  const sortedLeaderboard = leaderboardData.sort(
    (a, b) => a.moveCount - b.moveCount
  );

  return (
    <div>
      Leaderboard
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Moves</th>
          </tr>
        </thead>
        <tbody>
          {sortedLeaderboard.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.username}</td>
              <td>{entry.moveCount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Leaderboard;
