import React, { useState } from "react";
import Button from "react-bootstrap/Button";
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
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Control
          type="text"
          placeholder={placeholder}
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
  );
};

export default AnswerComponent;
