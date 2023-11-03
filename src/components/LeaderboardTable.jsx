import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { useLeaderboard } from "../headercomponents/LeaderboardContext";
import { useAuth } from "../components/AuthContext";

const LeaderboardTable = () => {
    const {sortedLeaderboard} = useLeaderboard()
  return (
    <div>
      {/* <button onClick={grabSession}>session ?</button>
      <button onClick={grabUser}>User ?</button> */}
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
  )
}

export default LeaderboardTable