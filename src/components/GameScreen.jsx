import React, { useState, useEffect } from "react";
import Step1 from "../components/Step1";
import Timer from "./Timer";
import cartoon from "../assets/detectivecartoon.png";
import "../styles/TitleScreen.css";
import CluesTabs from "../cluescomponents/CluesTabs";

const GameScreen = () => {
  const [showStep1, setShowStep1] = useState(true);
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    setShowStep1(true);
    setShowTimer(true);
  }, []);

  return (
    <div className="title-container">
      <CluesTabs />
      <div className="image-container">
        {/* <img className="cartoon" src={cartoon} alt="Antique" /> */}
      </div>
      {/* <h2>Boom</h2> */}
      {showTimer && <Timer />}
      {showStep1 && (
        <div className="scrollable-box">
          <Step1 />
        </div>
      )}
    </div>
  );
};

export default GameScreen;
