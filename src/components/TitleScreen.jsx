import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Step1 from '../components/Step1';
import { CompletionBarContext } from '../App';

const TitleScreen = () => {
  const [showStep1, setShowStep1] = useState(false);
  const { updateProgress } = useContext(CompletionBarContext);

  return (
    <div>
      <h2>Welcome to our game. This is a mystery game that you must solve by figuring out the correct clues. Will you be able to find the killer in time?</h2>
      <Button size="lg" variant="danger" onClick={() => setShowStep1(true)}>Play</Button>{' '}
      {showStep1 && <Step1 />}
    </div>
  );
}

export default TitleScreen;
