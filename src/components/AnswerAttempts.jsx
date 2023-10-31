import React, { useContext, useState } from "react";
import { PlayerAttemptsContext } from "../App";
import "../styles/AnswerAttempts.css";

const AnswerAttempts = () => {
  const {attempts} = useContext(PlayerAttemptsContext)
  return (
    <div className="answer-attempts-container">
      <div className="attempts">
        <h2>Moves - {attempts}</h2>
        {/* <p className="attempts-number">{attempts}</p> */}

      </div>
    </div>
  );
};

export default AnswerAttempts;
