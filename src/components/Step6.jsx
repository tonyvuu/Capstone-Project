import React, { useState, useContext, useEffect } from 'react';
import Step7 from './Step7';
import '../styles/Step1.css';
import { TypeAnimation } from 'react-type-animation';
import { CompletionBarContext } from '../App';
import AnswerComponent from './AnswerComponent';

const Step5 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { updateProgress } = useContext(CompletionBarContext);

  const text = `TWO MISSING VOICEMAILS\n\n6:40pm: Voicemail from Ellen Doe: \n\n"Just remembered calling a local gardening guy few weeks ago to do some work at the house. No one else besides Adam and Jen have been at the house recently. His name is Ethan Shulman.\n\n 7:10pm: Voicemail from Jen Doe:\n\n"Hey, I lied earlier about calling in sick to work. I actually bought a pregnancy test last night at the drugstore and took it in Marty's bathroom...turns out I'm pregnant. Don't tell my family please."`;

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
          placeholder="Who is the accomplice?"
          correctAnswer="adam doe"
          onCorrectAnswer={handleCorrectAnswer}
        />
      )}

      {isCorrect && <Step7 />}
    </div>
  );
};

export default Step5;
