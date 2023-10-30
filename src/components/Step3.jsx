import React, { useState, useContext, useEffect } from 'react';
import Step4 from './Step4';
import '../styles/Step1.css';
import { TypeAnimation } from 'react-type-animation';
import { CompletionBarContext } from '../App';
import AnswerComponent from './AnswerComponent';

const Step2 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { updateProgress } = useContext(CompletionBarContext);

  const text = `Officer Billy and Alex received a dispatch at 4:25 am to respond to home invasion in progress at 1 Bourbon ROAD. \n\nOfficers arrived at 4:29am but questioned themselves because dispatch told us there was a woman calling from their closet on the THIRD floor and 1 Bourbon ROAD is a single floor home. They radio dispatch and after waiting 4 minutes, the break-in actually occur at 1 Bourbon DRIVE - 11 min away from the scene. Following standard protocol, they cleared the first and second floor. The officers then ascended to the 3rd floor where dispatch said the woman was calling from her closet. In the master bedroom, she was lying face up deceased. She didn't had any physical harm on her but looked lifeless. She had no pulse. A shattered phone was next to her left hand. \n\nCRIME INVESTIGATION REPORT: \nSecluded cabin house. No signed of forced entry through backdoor, front door, or windows. All windows and doors were connected to the security system, which was confirmed to be armed, indicating the intruder knew the passcode. The CSI team found hospital ID belonging to neighbor found in the sand about 300 feet northeast of the cabin house. No additional evidence found outside of the premises.\n\nVICTIM DEAD BODY DESCRIPTION: \n26 - year old woman, approximately 5”4 and 130 lbs. Apparent victim of smothered/suffocation. A phone was next to her hand with a smashed screen. It appears the phone was used as a weapon against her assailant. Multiple cuts on her right hand, appears to be caused by glass from the phone screen that shattered\n\n NEED TO FIND OUT WHY:\n\n 1. Why were they alone?\n 2. Who knew they were there? \n3. Who has a key and passcode? \n4. Who is the picture found on the crime scene?`;

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
          placeholder="Look for clues and identify whose hospital ID it belongs to"
          correctAnswer="zach bash"
          onCorrectAnswer={handleCorrectAnswer}
        />
      )}

      {isCorrect && <Step4 />}
    </div>
  );
};

export default Step2;
