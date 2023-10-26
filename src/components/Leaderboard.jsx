import React from 'react'
import Table from 'react-bootstrap/Table';

const Leaderboard = () => {
  return (
    <div>
        Leaderboard
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Attempts</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Santi</td>
          <td>40</td>
          <td>blah</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Tony</td>
          <td>50</td>
          <td>blah</td>
        </tr>
      </tbody>
    </Table>

    </div>
  )
}

export default Leaderboard