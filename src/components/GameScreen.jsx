import React, { useState, useEffect } from "react";
import Step1 from "../components/Step1";
import Timer from "./Timer";
import cartoon from "../assets/detectivecartoon.png";
import "../styles/TitleScreen.css";
import CluesTabs from "../cluescomponents/CluesTabs";
import CompletionBar from "./CompletionBar";

const GameScreen = () => {
  return (
    <div className="title-container">
      <CluesTabs />
      <Timer />
      <CompletionBar />
      <div className="image-container">
        {/* <img className="cartoon" src={cartoon} alt="Antique" /> */}
      </div>

      <div className="scrollable-box">
        <Step1 />
      </div>
    </div>
  );
};

export default GameScreen;
