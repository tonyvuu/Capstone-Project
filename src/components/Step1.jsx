import React, { useState, useContext } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Step2 from "./Step2";
import "../styles/Step1.css";
import { TypeAnimation } from "react-type-animation";
import { CompletionBarContext } from '../App';

const Step1 = () => {
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const { updateProgress } = useContext(CompletionBarContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.toLowerCase() === "makenna") {
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
            "In Morrow, Georgia, at 4:23 AM this morning, an unidentified man forcibly entered a remote beach house where 26-year-old twins, Toni and MaKenna Doe, were asleep. Tragically, MaKenna was killed by the intruder, and Toni was kidnapped before first responders could arrive. Police departments from two states are actively searching for both the murderer of MaKenna and her missing sister Toni, but neither has been located yet. The case took a perplexing turn when Homicide Detective Manti Fettuccine, who had made a significant breakthrough, mysteriously disappeared. He left behind his detective's notebook, which authorities are trying to decipher. The killer is still on the loose. \n\nCASE NUMBER: K-868A \nLOCATION: DevTown, GA",
          ]}
          speed={95}
          style={{ fontSize: "1.5em", whiteSpace: "pre-line" }}
        />
      </div>
      <br/>
      <div className="story-input">
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3 custom-input-group">
            <FormControl
              className="custom-input"
              type="text"
              placeholder="Which twin is deceased?"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setShowErrorMessage(false);
              }}
            />
            <Button className="custom-button" type="submit">
              Submit
            </Button>
          </InputGroup>
          {showErrorMessage && <p className="text-danger">Incorrect answer</p>}
        </Form>
      </div>
      {isCorrect && <Step2 />}
    </div>
  );
};

export default Step1;
