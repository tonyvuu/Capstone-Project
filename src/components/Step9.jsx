import React, { useState, useContext, useEffect } from 'react';
import CompletionScreen from './CompletionScreen';
import '../styles/Step1.css';
import { TypeAnimation } from 'react-type-animation';
import { CompletionBarContext } from '../App';
import AnswerComponent from './AnswerComponent';

const Step5 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { updateProgress } = useContext(CompletionBarContext);

  const text = `Because you found that, we were able to issue a warrant to search through his home. When the SWAT team arrives, we found Toni tied up in a corner with Morgan. David Can was arrested and you completed the mystery game.`;

  const speed = 100;

  useEffect(() => {
    const animationDuration = (text.length / speed) * 1000;

    const timeoutId = setTimeout(() => {
      setShowForm(true); 
    }, animationDuration);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleCorrectAnswer = () => {
    setIsCorrect(true);
    updateProgress(10);
  };

  return (
    <div>
      <div className="story-text">
        <TypeAnimation
          sequence={[text]}
          speed={speed}
          style={{ fontSize: '1.5em', whiteSpace: 'pre-line' }}
        />
      </div>
      <br/>
      {showForm && (
        <AnswerComponent
          placeholder="Congratulations :) (type 'mystery solved')"
          correctAnswer="mystery solved"
          onCorrectAnswer={handleCorrectAnswer}
        />
      )}

      {isCorrect && <CompletionScreen />}
    </div>
  );
};

export default Step5;
