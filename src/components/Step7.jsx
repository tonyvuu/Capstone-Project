import React, { useState, useContext, useEffect } from 'react';
import Step8 from './Step8';
import '../styles/Step1.css';
import { TypeAnimation } from 'react-type-animation';
import { CompletionBarContext } from '../App';
import AnswerComponent from './AnswerComponent';

const Step7 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { updateProgress } = useContext(CompletionBarContext);

  const text = `CONGRATULATIONS! \n\n You found the accomplice! But what evidence helped you? We need solid evidence to get a warrant..`;

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
          placeholder="What evidence was found to obtain a search warrant?"
          correctAnswer="photos"
          onCorrectAnswer={handleCorrectAnswer}
        />
      )}

      {isCorrect && <Step8 />}
    </div>
  );
};

export default Step7;
