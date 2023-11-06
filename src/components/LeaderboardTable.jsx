import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { useLeaderboard } from "../headercomponents/LeaderboardContext";
import { useAuth } from "../components/AuthContext";
import "../styles/Leaderboard.css"

const LeaderboardTable = () => {
    const {sortedLeaderboard, sortLeaderboard} = useLeaderboard()

    
  return (
    <div>
      {/* <button onClick={() => console.log(sortLeaderboard)}>session ?</button> */}
      <h1>Leaderboard</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Moves</th>
          </tr>
        </thead>
        <tbody>
          {sortedLeaderboard.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="leaderboard-name">Detective {user.firstName}</td>
              <td>{user.highScore}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default LeaderboardTable