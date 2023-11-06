import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { useLeaderboard } from "../headercomponents/LeaderboardContext";
import { useAuth } from "../components/AuthContext";
import '../styles/Leaderboard.css';

const LeaderboardTable = () => {
    const { sortedLeaderboard, sortLeaderboard } = useLeaderboard();

    return (
        <div>
            <h1>Leaderboard</h1>
            <Table striped bordered hover className="leaderboard-table">
                <thead>
                    <tr>
                        <th className="white-text-black-bg">Rank</th>
                        <th className="white-text-black-bg">Name</th>
                        <th className="white-text-black-bg">Moves</th>
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
