import React, { useState } from 'react';
import { InputGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Step4 from './Step4';
import '../styles/Step1.css';
import { TypeAnimation } from 'react-type-animation';

const Step3 = () => {
  const [inputValue, setInputValue] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.toLowerCase() === 'zach bash') {
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
            "Officer Billy and Alex received a dispatch at 4:25 am to respond to home invasion in progress at 1 Bourbon ROAD. \n\nOfficers arrived at 4:29am but questioned themselves because dispatch told us there was a woman calling from their closet on the THIRD floor and 1 Bourbon ROAD is a single floor home. They radio dispatch and after waiting 4 minutes, the break-in actually occur at 1 Bourbon DRIVE - 11 min away from the scene. Following standard protocol, they cleared the first and second floor. The officers then ascended to the 3rd floor where dispatch said the woman was calling from her closet. In the master bedroom, she was lying face up deceased. She didn't had any physical harm on her but looked lifeless. She had no pulse. A shattered phone was next to her left hand. \n\nCrime Investigation Report: \nSecluded cabin house. No signed of forced entry through backdoor, front door, or windows. All windows and doors were connected to the security system, which was confirmed to be armed, indicating the intruder knew the passcode. Found hospital ID belonging to neighbor found in the sand about 300 feet northeast of the cabin house. No additional evidence found outside of the premises.\n\nVictim dead body description: \n26 - year old woman, approximately 5”4 and 130 lbs. Apparent victim of smothered/suffocation. A phone was next to her hand with a smashed screen. It appears the phone was used as a weapon against her assailant. Multiple cuts on her right hand, appears to be caused by glass from the phone screen that shattered" 
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
            placeholder="Look for clues and identify whose hospital ID it belongs to"
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
      {isCorrect && <Step4 />}
    </div>
  );
};

export default Step3;
