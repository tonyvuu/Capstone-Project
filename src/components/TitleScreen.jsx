import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Step1 from "../components/Step1";
import detective from "../assets/detective.png"
import "../styles/TitleScreen.css";

const TitleScreen = () => {
  const [showStep1, setShowStep1] = useState(false);

  return (
    <div className="title-container">
      {/* {!user then display login and sign up
            user then {<det. id} hide the login and sign up
            } */}
      <div className="image-container">
        <img className="detective" src={detective} alt="Detective" />
      </div>
      <h2>
        Welcome to our game. This is a mystery game that you must solve by
        figuring out the correct clues. Will you be able to find the killer in
        time?
      </h2>
      <Button size="lg" variant="danger" onClick={() => setShowStep1(true)}>
        Play
      </Button>{" "}
      {showStep1 && <Step1 />}
    </div>
  );
};

export default TitleScreen;

