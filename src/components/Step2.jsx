import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Step3 from './Step3';
import '../styles/Step1.css';
import { TypeAnimation } from 'react-type-animation';
import { CompletionBarContext } from '../App';

const Step2 = () => {
  const [inputValue, setInputValue] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const { updateProgress } = useContext(CompletionBarContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.toLowerCase() === '3') {
      setIsCorrect(true);
      setShowErrorMessage(false);
      updateProgress(10); 
    } else {
      setIsCorrect(false);
      setShowErrorMessage(true);
    }
  };

  return (
    <div>
      <div className="story-text">
        <TypeAnimation
          sequence={[
            "Manti was very close to solving the case. There was a footage of him leaving his house outside where he scream,” I THINK I SOLVED THE CASE!” he immediately ran to his car and drove away. However, he went missing the next following day. Manti left his notebook behind on the investigation. It is up to you to look for clues and details in his notebook that will help guide towards to solving the mystery. \n\nThe game has 3 objectives \n1. Find the accomplice \n2. Identify the killer \n3. Bonus. \n\nList of valuable information such as time, interviews, and descriptions of the crime scene needs to be retained in order to progress through the story \n\n • Crime happened @ 4:00 am, February 23, 1997\n • Dispatched @ 4:25 and arrived @ 4:44 am \n • Doors were locked. No signs of forced entry \n • Parents arrived in a red SUV @ 6:12 am. Mom went crazy but dad was oddly calm."
          ]}
          speed={95}
          style={{ fontSize: '1.5em',whiteSpace: 'pre-line' }}
        />
      </div>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            type="text"
            placeholder="Please look around for clues and discover how many key evidence you found"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setShowErrorMessage(false);
            }}
          />
          {showErrorMessage && <p className="text-danger">Incorrect answer</p>}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {isCorrect && <Step3 />}
    </div>
  );
};

export default Step2;
