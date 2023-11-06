import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { useLeaderboard } from "../headercomponents/LeaderboardContext";
import { useAuth } from "../components/AuthContext";
import '../styles/Leaderboard.css';

const LeaderboardTable = () => {
    const { sortedLeaderboard, sortLeaderboard } = useLeaderboard();

    return (
        <div className="leaderboard-container">
            <h1 className="leaderboard-title">Leaderboard</h1>
            <br />
            <Table striped bordered hover className="leaderboard-table">
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
    );
}

export default LeaderboardTable;
