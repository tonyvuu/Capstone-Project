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
    if (inputValue.toLowerCase() === 'mckenna') {
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
            "Manti was very close to solving the case. There was a footage of him leaving his house outside where he scream,” I THINK I SOLVED THE CASE!” he immediately ran to his car and drove away. However, he went missing the next following day. Santiago left his notebook behind on the investigation. It is up to you to look for clues and details in his notebook that will help guide towards to solving the mystery"
          ]}
          speed={95}
          style={{ fontSize: '1.5em',whiteSpace: 'pre-line' }}
        />
      </div>

      <h3>Where is Manti's notebook?</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            type="text"
            placeholder=""
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
