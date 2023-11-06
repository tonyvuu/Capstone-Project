import React, { useContext, useEffect, useState } from 'react';
import '../styles/Step1.css';
import { TypeAnimation } from 'react-type-animation';
import { CompletionBarContext } from '../App';
import { MoveCountContext } from '../App';
import { useLeaderboard } from "../headercomponents/LeaderboardContext";
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CompletionScreen = () => {
  const { updateProgress } = useContext(CompletionBarContext);
  const { moveCount } = useContext(MoveCountContext);
  const {sortLeaderboard} = useLeaderboard();
  const {userData} = useAuth();

  const text = `Congratulations! You have found the killer in ${moveCount} moves!`;

  let performanceMessage;

  if (moveCount <= 10) {
    performanceMessage = 'You are a master detective.';
  } else if (moveCount <= 20) {
    performanceMessage = 'You are a decent detective.';
  } else if (moveCount <= 30) {
    performanceMessage = 'Your detective skills need some work.';
  }

  const finalText = `${text} ${performanceMessage}`;

  const speed = 99;
  const [addedToLeaderboard, setAddedToLeaderboard] = useState(false);
  const [name, setName] = useState('');
  const [newScore, setNewScore] = useState({
    user_id: userData.user_id,
    score: moveCount
  });



  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const navigate = useNavigate();

  const inputScore = async() => {
    // setNewScore({
    //   user_id: userData.user_id,
    //   score: moveCount
    // })

    const response = await fetch("http://localhost:3000/addScore", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newScore),
    });
    if (!response.ok) {
      console.error("Fetch error:", response.status, response.statusText);
    } else {
      sortLeaderboard();
      navigate("/leaderboard");
    }



  }

  useEffect(() => {
    const animationDuration = (finalText.length / speed) * 1000;

    const timeoutId = setTimeout(() => {
      updateProgress(0); 
    }, animationDuration);

    return () => clearTimeout(timeoutId);
  }, [updateProgress]);

  return (
    <div>
      <div className="story-text">
        <TypeAnimation
          sequence={[finalText]}
          speed={speed}
          style={{ fontSize: '1.5em', whiteSpace: 'pre-line' }}
        />
      </div>
      <br />

      {/* <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      /> */}
      
      <Button className="custom-button" onClick={inputScore}>END</Button >
    </div>
  );
};

export default CompletionScreen;

