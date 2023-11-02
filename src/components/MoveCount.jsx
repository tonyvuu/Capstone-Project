import React, { useContext, useState } from "react";
import { MoveCountContext } from "../App";
import "../styles/AnswerAttempts.css";

const MoveCount = () => {
  const {moveCount} = useContext(MoveCountContext)
  return (
    <div className="answer-attempts-container">
      <div className="attempts">
        <h3>Moves - {moveCount}</h3>
        

      </div>
    </div>
  );
};

export default MoveCount;
