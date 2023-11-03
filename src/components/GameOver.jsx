import React, { useState, useContext, useEffect } from "react";
import "../styles/Step1.css";
import { TypeAnimation } from "react-type-animation";

const GameOver = () => {
  const text = `GAME OVER, the killer has found you.`;

  const speed = 50;

  useEffect(() => {
    const animationDuration = (text.length / speed) * 1000;

    const timeoutId = setTimeout(() => {
      setShowForm(true);
    }, animationDuration);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <br></br>
      <div className="story-text">
        <TypeAnimation
          sequence={[text]}
          speed={speed}
          style={{ fontSize: "1.5em", whiteSpace: "pre-line" }}
        />
      </div>
      <br />
    </div>
  );
};

export default GameOver;
