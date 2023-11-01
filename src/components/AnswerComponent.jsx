import React, { useState, useContext } from "react";
import { Button, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import MoveCount from "./MoveCount";
import { MoveCountContext } from "../App";
import '../styles/AnswerComponent.css'

const AnswerComponent = ({ placeholder, correctAnswer, onCorrectAnswer }) => {
  const [inputValue, setInputValue] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const { updateMoveCount } = useContext(MoveCountContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.toLowerCase() === correctAnswer) {
      onCorrectAnswer();
    } else {
      setShowErrorMessage(true);
    }
  };

  return (
    <div className="answer-component">
      <div className="move-count-container">
        <MoveCount />
      </div>
      <Form onSubmit={handleSubmit} className="custom-input-form">
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
          <Button className="custom-button1" type="submit" onClick={() => updateMoveCount(1)}>
            Submit
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default AnswerComponent;
