import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import antique from "../assets/antique.jpg";
import "../styles/TitleScreen.css";


const TitleScreen = () => {
  return (
    <div className="title-container">
      <div className="image-container">
        <img className="antique" src={antique} alt="Antique" />
      </div>
      <h2>
      Enter into the Dev Town Murder Mystery. It's a challenging puzzle where you'll solve the riddles to unravel the secrets. Can you expose the culprit before time runs out?
      </h2>
      <br />
      <Link to="/game">
        <Button size="lg" className="custom-button">
          Play
        </Button>
      </Link>{" "}
    </div>
  );
};

export default TitleScreen;
