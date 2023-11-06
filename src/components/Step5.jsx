import React, { useState, useContext, useEffect } from 'react';
import Step6 from './Step6';
import '../styles/Step1.css';
import { TypeAnimation } from 'react-type-animation';
import { CompletionBarContext } from '../App';
import AnswerComponent from './AnswerComponent';

const Step5 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { updateProgress } = useContext(CompletionBarContext);

  const text = "* RING RING * \n-You picked up a phone call from Officer Paul \n\nYou: Hello?\n\nOfficer Paul: Hey, you asked for me? I personally know Zach Bash and you should be careful around him. \n\nYou: Why?\n\n Officer Paul: He pretends to be dumb but is actually very smart and dangerous. \n\nYou: Thanks for the information officer.\n\n Officer Paul: Want me to join you for a interview? \n\nYou: It's okay officer, I will take care of it myself. Also, can you please tell me any extra details on him if anything comes up? \n\nOfficer Paul: Yeah, I'll do that. Good luck. \n\n We need to figure out who is the girl with the drawn-in evil smile and horns..";

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
          placeholder="Find a phrase for the evil smile & horns?"
          correctAnswer="devil on my shoulders"
          onCorrectAnswer={handleCorrectAnswer}
        />
      )}

      {isCorrect && <Step6 />}
    </div>
  );
};

export default Step5;
