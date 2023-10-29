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

  const text = `Manti was very close to solving the case. There was a footage of him leaving his house outside where he screamed, "I THINK I SOLVED THE CASE!" He immediately ran to his car and drove away. However, he went missing the next following day. Manti left his notebook behind on the investigation. It is up to you to look for clues and details in his notebook that will help guide towards solving the mystery. It is up to you to look for clues and details in his notebook that will guide you towards to solving the mystery.\n\nThe game has 3 objectives\n• Find the accomplice\n• Identify the killer\n• Bonus \n\nList of valuable information such as time, interviews, and descriptions of the crime scene needs to be retained in order to progress through the story`;

  const speed = 95;

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
          placeholder="Look for clues and identify how many key evidence you found"
          correctAnswer="2"
          onCorrectAnswer={handleCorrectAnswer}
        />
      )}

      {isCorrect && <Step3 />}
    </div>
  );
};

export default Step2;
