import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Step2 from './Step2';
import '../styles/Step1.css';
import { TypeAnimation } from 'react-type-animation';

const Step1 = () => {
  const [inputValue, setInputValue] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.toLowerCase() === 'mckenna') {
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
            "Morrow, GA - At 4:23 this morning, a man broke into a remote beach house where 26 year-old twin Toni and MaKenna Doe were asleep. The unidentified man murdered MaKenna and abducted Toni before first responders could arrive. Police departments across two states are hunting for MaKenna's killer and her sister Toni, but neither has been found. Homicide detective, Manti Fettuccine, made a breakthrough in the case but then mysteriously disappeared. He left his detective's notebook behind but authorities aren't sure what to make of it. The killer is on the loose. \nCASE FACTS: VICTIM: Makenna Doe\nCASE NUMBER: G-668H\nLOCATION: DevTown, GA"
          ]}
          speed={95}
          style={{ fontSize: '1.5em',whiteSpace: 'pre-line' }}
        />
      </div>

      <h3>Which twin is deceased?</h3>
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
      {isCorrect && <Step2 />}
    </div>
  );
};

export default Step1;
