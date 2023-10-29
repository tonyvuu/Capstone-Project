import React, { useState, useContext, useEffect } from "react";
import Step2 from "./Step2";
import AnswerComponent from "./AnswerComponent";
import "../styles/Step1.css";
import { TypeAnimation } from "react-type-animation";
import { CompletionBarContext } from '../App';
import CompletionBar from './CompletionBar';

const Step1 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { updateProgress } = useContext(CompletionBarContext);

  const text = `Morrow, GA - At 4:23 this morning, a man broke into a remote beach house where 26-year-old twin Toni and MaKenna Doe were asleep. The unidentified man murdered MaKenna and abducted Toni before first responders could arrive. Police departments across two states are hunting for MaKenna's killer and her sister Toni, but neither has been found. Homicide detective, Manti Fettuccine, made a breakthrough in the case but then mysteriously disappeared. He left his detective's notebook behind but authorities aren't sure what to make of it. The killer is on the loose.\nCASE FACTS: VICTIM: Makenna Doe\nCASE NUMBER: G-668H\nLOCATION: DevTown, GA`;

  const speed = 95;

  useEffect(() => {
    const animationDuration = (text.length / speed) * 1000;

    const timeoutId = setTimeout(() => {
      setShowForm(true);
    }, animationDuration);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <div className="story-text">
        <TypeAnimation
          sequence={[text]}
          speed={speed} 
          style={{ fontSize: "1.5em", whiteSpace: "pre-line" }}
        />
      </div>

      {showForm && (
        <AnswerComponent
          placeholder="Which twin is deceased?"
          correctAnswer="mckenna"
          onCorrectAnswer={() => {
            setIsCorrect(true);
            updateProgress(10);
          }}
        />
      )}

      {isCorrect && <Step2 />}
      <CompletionBar />
    </div>
  );
};

export default Step1;