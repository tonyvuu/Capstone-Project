import React from 'react'
import Table from 'react-bootstrap/Table';

const Leaderboard = () => {
  return (
    <div>
        Leaderboard
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Username</th>
          <th>Attempts</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Santi</td>
          <td>40</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Tony</td>
          <td>50</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Kenny</td>
          <td>60</td>
        </tr>
      </tbody>
    </Table>

    </div>
  )
}

export default Leaderboard


// after I'm going through the mystery game, I want the game to end somehow, and when that ending screen or component is rendered, I want to record the move count. I want that move count to show up in the leaderboard as a new entry. Since there's no login right now, I want the user name to be "anon". So their rank, based on the lowest moves, their username, in this case "anon" and their recorded moves for example 50. Here's the current leaderboard component's layout: 