import React, { useState, useContext, useEffect } from 'react';
import Step4 from './Step4';
import CompletionScreen from './CompletionScreen';
import '../styles/Step1.css';
import { TypeAnimation } from 'react-type-animation';
import { CompletionBarContext } from '../App';
import AnswerComponent from './AnswerComponent';

const Step3 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { updateProgress } = useContext(CompletionBarContext);

  const text = `Officer Billy and Alex received a dispatch at 4:25 am to respond to home invasion in progress at 1 Bourbon ROAD. \n\nOfficers arrived at 4:29 am but questioned themselves because dispatch told them there was a woman calling from a closet on the third floor, yet 1 Bourbon ROAD is a single-floor home. Officer Billy radioed dispatch, and after waiting for 4 minutes, the operator found out and told the officers that the break-in actually occurred at 1 Bourbon DRIVE, which was 11 minutes away from the scene. Upon arriving at the scene, the officers followed standard protocol and cleared the first and second floors. They ascended to the third floor, where dispatch said the woman was calling from her closet. In the master bedroom, they found her lying, face up, deceased. She showed no signs of physical harm. A shattered phone was next to her left hand. \n\n INVESTIGATION REPORT: \nThe secluded beach house is a three-story house. There was no sign of forced entry through the backdoor, front door, or windows. All windows and doors are connected to the security system, which is armed, indicating that the intruder knew the passcode. The CSI team found a photo of the twins with their names, address, and the house security code on the back. Additionally, they discovered a photo of a girl with drawn-in horns and an evil smile. Further evidence included a hospital ID belonging to a neighbor, found approximately 300 feet northeast of the beach house.\n\n- Killer left this behind\n- Killer needed an accomplice who knew twins and the passcode\n- At least 2 people were involved\n- This was planned \n\nVICTIM'S DEAD BODY DESCRIPTION: \nThe victim was a 26-year-old woman, approximately 5'4" and 130 lbs. She appeared to be a victim of smothering/suffocation. A phone with a smashed screen was next to her hand, and it appears the phone was used as a weapon against her assailant. There were multiple cuts on her right hand, seemingly caused by glass from the shattered phone screen.\n\n NEED TO FIND OUT WHY:\n\n 1. Why were they alone?\n 2. Who knew they were there? \n3. Who has a key and passcode? \n4. Whose picture was found on the crime scene?`;

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
          placeholder="How many key evidence were found?"
          correctAnswer="3"
          onCorrectAnswer={handleCorrectAnswer}
        />
      )}

      {/* {isCorrect && <CompletionScreen />} */}
      {isCorrect && <Step4 />}
    </div>
  );
};

export default Step3;
