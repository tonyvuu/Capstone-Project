import React, { useState } from "react";
import {Button, InputGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";

const AnswerComponent = ({ placeholder, correctAnswer, onCorrectAnswer }) => {
  const [inputValue, setInputValue] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.toLowerCase() === correctAnswer) {
      onCorrectAnswer();
    } else {
      setShowErrorMessage(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3 custom-input-group">
        <Form.Control
          className="custom-input" 
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setShowErrorMessage(false);
          }}
        />
        {showErrorMessage && <p className="text-danger">Incorrect answer</p>}
      <Button className="custom-button" type="submit">
        Submit
      </Button>
      </InputGroup>
    </Form>
  );
};

export default AnswerComponent;
