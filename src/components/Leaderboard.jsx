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