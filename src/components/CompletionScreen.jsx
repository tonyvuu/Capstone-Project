import React, { useContext, useEffect, useState } from 'react';
import '../styles/Step1.css';
import { TypeAnimation } from 'react-type-animation';
import { CompletionBarContext } from '../App';
import { MoveCountContext } from '../App';
import { useLeaderboard } from "../headercomponents/LeaderboardContext";

const CompletionScreen = () => {
  const { updateProgress } = useContext(CompletionBarContext);
  const { moveCount } = useContext(MoveCountContext);
  const { leaderboardData, setLeaderboardData } = useLeaderboard();

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

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    const ifEntryExists = leaderboardData.some((entry) => entry.name === name);

    if (!ifEntryExists && !addedToLeaderboard && name) {
      const newEntry = { name, moveCount };
      setLeaderboardData([...leaderboardData, newEntry]);
      setAddedToLeaderboard(true);
    }
  };

  const inputScore = () => {
    
  }

  useEffect(() => {
    const animationDuration = (finalText.length / speed) * 1000;

    const timeoutId = setTimeout(() => {
      updateProgress(0); 
      setShowForm(true);
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

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
      
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CompletionScreen;
