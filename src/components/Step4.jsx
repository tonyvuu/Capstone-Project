import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Step5 from './Step5';
import '../styles/Step1.css';
import { TypeAnimation } from 'react-type-animation';

const Step4 = () => {
  const [inputValue, setInputValue] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.toLowerCase() === 'kenny') {
      setIsCorrect(true);
      setShowErrorMessage(false);
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
            "" 
          ]}
          speed={95}
          style={{ fontSize: '1.5em',whiteSpace: 'pre-line' }}
        />
      </div>
      <br/>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            type="text"
            placeholder="Look for clues and identify whose hospital ID it belongs to"
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
      {isCorrect && <Step5 />}
    </div>
  );
};

export default Step4;
