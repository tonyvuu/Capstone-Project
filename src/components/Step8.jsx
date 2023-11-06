import React, { useState, useContext, useEffect } from 'react';
import Step9 from './Step9';
import '../styles/Step1.css';
import { TypeAnimation } from 'react-type-animation';
import { CompletionBarContext } from '../App';
import AnswerComponent from './AnswerComponent';

const Step8 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { updateProgress } = useContext(CompletionBarContext);

  const text = `The SWAT team swiftly surrounded Adam's apartment in hopes of catching the killer, only to discover they were too late — Adam Doe lay dead in his living room, suffocated. The killer left no traces once again. They found Morgan’s convertible parked around the back of the apartment so he must have bump into the killer there.. Now, we urgently need to locate Morgan and Toni. The only new clue is a torn page from Morgan's notebook found under the driver's seat. Time is running out, and Morgan and Toni's lives are on the line. They desperately need your help. \n\n TORN PAGE FROM MORGAN'S NOTEBOOK: \n\n- Received a called from Chief Dexter at Texas State Department\n- Requested background check on Zach Nash\n\n What else can you tell me about him? \n\nChief Dexter: He seems really quiet but kind of creepy and aloof. I can't tell you much because he rarely speaks. \n\n What was he wearing? \n\n- A black hooded sweatshirt. He also had some weird emblem on his chest. `;

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
          placeholder="What is the NAME of the killer?"
          correctAnswer="oliver georgia"
          onCorrectAnswer={handleCorrectAnswer}
        />
      )}

      {isCorrect && <Step9 />}
    </div>
  );
};

export default Step8;
