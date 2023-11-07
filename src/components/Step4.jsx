import React, { useState, useContext, useEffect } from 'react';
import Step5 from './Step5';
import '../styles/Step1.css';
import { TypeAnimation } from 'react-type-animation';
import { CompletionBarContext } from '../App';
import AnswerComponent from './AnswerComponent';
import CompletionScreen from './CompletionScreen';

const Step4 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { updateProgress } = useContext(CompletionBarContext);

  const text = "911 Phone Transcript\nTime: 4:23am\nDuration: 1:53\nOperator - Tiffany Hannah \nCaller - Makenna Doe \n\nYou: Hello?\n\nOperator: 911, what's your emergency? \n\nCaller: (WHISPERING) Hello? \n\nOperator: This is 911 dispatch. What's your emergency? \n\nCaller: (MUFFLED NOISE).\n\nOperator: I'm sorry, you're going to have to speak up. How can I help you? \n\nCaller: (WHISPERING) There's... there's a guy in my house. We're getting robbed. I think. I'm not sure who he is. He's downstairs. I need police now! Please, can you help us?! \n\nOperator: What's your address, ma'am? \n\n Caller: Um.. I'm on Marsh Lagoon. Bourbon Drive, Um... number 1. In Dev Town. \n\nOperator: That's number 1 Bourbon Drive in Dev Town?\n\nCaller: (WHISPERING) Yeah. Can you send? How long is it going to...\n\nOperator: I'm sending police right now. I have a patrol car that should be there within a few minutes. What's your name, ma'am?\n\nCaller: (WHISPERING) Makenna Doe. My sister Toni's downstairs with him. She's tied up..\n\nOperator: How many people do you see? \n\nCaller: (WHISPERING) Just one. A man. He was ...um..wearing all black.\n\nOperator: Did you see a gun? Any weapons?\n\nCaller: (WHISPERING) No. I ... I don't think so. I heard something and looked down the stairs and saw him and Toni in the living room. He was tying her up and he had, like, tape over her mouth. He was in all black, with a hood and gloves. That's all I saw. I think he saw me.\n\nOperator: Are you hiding, Makenna? Can you get under the bed or in a closet or-\n\nCaller: (WHISPERING) I'm in the closet. \n\nOperator: I have help coming right now, Makenna. What else did you see?\n\n Caller: (MUFFLED NOISE)\n\nOperator: Did you see anything else Makenna?\n\nCaller: (WHISPERING) I can hear him... He's coming up the stairs.\n\nOperator: Help is on the way, Makenna. There's a ...\n\nCaller: Shhh! \n\n (8 SECONDS OF SILENCE, FOLLOWED BY THE SOUND OF A DOOR OPENING, A WOMAN'S SCREAM, AND SOME MUFFLED NOISES) \n\nOperator: My god. Makenna, are you okay? Makenna? Are you there? \n\n(PHONE DISCONNECTS AT 4:25AM)\n ----------------------------------------------------------\n\n5:55AM: Mom (Ellen Doe) & Stepdad (John McKinsey) arrive\n\n-Mom in shock, hysterical, 100% genuine\n-Stepdad oddly calm\n-Billy & Alex restrains mom\n-After mom calms down, we identify the body and confirm that: \n\n -Dead body is Makenna\n-Toni is missing \n\n We need to start investigating.. we should start with the parents";

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
          placeholder="Who does the hospital ID belong to?"
          correctAnswer="zach bash"
          onCorrectAnswer={handleCorrectAnswer}
        />
      )}
      {/* {isCorrect && <CompletionScreen />} */}
      {isCorrect && <Step5 />}
    </div>
  );
};

export default Step4;
