import React, { useState, useEffect } from "react";
import "../styles/GameOver.css";
import { TypeAnimation } from "react-type-animation";

const GameOver = () => {
  const gameoverText = `GAME OVER`;

  const [showAdditionalText, setShowAdditionalText] = useState(false);

  useEffect(() => {
    const animationDuration = gameoverText.length * 100; 

    setTimeout(() => {
      setShowAdditionalText(true);
    }, animationDuration + 500); 
  }, []);

  return (
    <div className="content-container">
      <div className="centered-content">
        <TypeAnimation
          sequence={[gameoverText]}
          speed={1}
          omitDeletionAnimation={true}
          style={{
            fontSize: "10em",
            fontWeight: "bold",
            whiteSpace: "pre-line",
            color: "red",
          }}
        />
      </div>

      {showAdditionalText && (
        <div className="sub-text">
          <div>
            <p>The killer has found you</p>
            {/* <button>Continue</button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameOver;
