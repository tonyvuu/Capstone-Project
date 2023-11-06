import React, { useState, useContext, useEffect } from 'react';
import Step3 from './Step3';
import '../styles/Step1.css';
import { TypeAnimation } from 'react-type-animation';
import { CompletionBarContext } from '../App';
import AnswerComponent from './AnswerComponent';

const Step2 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { updateProgress } = useContext(CompletionBarContext);

  const text = "Morgan was very close to solving the case. There was footage of him leaving his house outside where he screamed, 'I THINK I SOLVED THE CASE!' He immediately ran to his car and drove away. However, he went missing the following day. Morgan left his notebook behind on the investigation. It is up to you to look for clues and details in his notebook that will help towards solving the mystery.\n\nThe game has 2 objectives:\n• Find the accomplice\n• Identify the killer";

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
      <br />
      {showForm && (
        <AnswerComponent
          placeholder="Which twin is deceased?"
          correctAnswer="makenna"
          onCorrectAnswer={handleCorrectAnswer}
        />
      )}

      {isCorrect && <Step3 />}
    </div>
  );
};

export default Step2;
