import React, { useState } from 'react';
import { InputGroup } from "react-bootstrap";
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
    if (inputValue.toLowerCase() === 'Devil') {
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
            "* RING RING * \n-You picked up a phone call from Officer Paul \n\nYou: Hello?\nOfficer Paul: Hey, you asked for me? I personally know Zach Bash and you should be careful around him. \nYou: Why?\n Officer Paul: He pretends to be dumb is actually very smart and dangerous. \nYou: Thanks for the information officer.\n Officer Paul: Want me to join you for a interview? \nYou: It's okay officer, I will take care of it myself. Also can you please tell me any extra details on him if anthing comes up? \nOfficer Paul: Yea, I'll do that. Good luck \n\n We need to figure out who is the girl with the drawn in evil smile.." 
          ]}
          speed={95}
          style={{ fontSize: '1.5em',whiteSpace: 'pre-line' }}
        />
      </div>
      <br/>
      <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3 custom-input-group">
          <Form.Control
            className="custom-input" 
            type="text"
            placeholder="Look for clues and identify a phrase related to her"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setShowErrorMessage(false);
            }}
          />
          {showErrorMessage && <p className="text-danger">Incorrect answer</p>}
          <Button className='custom-button' type="submit">
          Submit
        </Button>
        </InputGroup>
      </Form>
      {isCorrect && <Step5 />}
    </div>
  );
};

export default Step4;
