import React, { useContext, useState } from "react";
import { MoveCountContext } from "../App";
import "../styles/AnswerAttempts.css";

const MoveCount = () => {
  const {moveCount} = useContext(MoveCountContext)
  return (
    <div className="answer-attempts-container">
      <div className="attempts">
        <h5>Moves: {moveCount}</h5>
        

      </div>
    </div>
  );
};

export default MoveCount;
