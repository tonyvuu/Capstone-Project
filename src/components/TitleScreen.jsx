import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import antique from "../assets/antique.jpg";
import "../styles/TitleScreen.css";
import { useAuth } from "./AuthContext";

const TitleScreen = () => {
  const { isAuthenticated, userData } = useAuth();
  const [userAttempts, setUserAttempts] = useState({
    user_id: null,
  });

  const navigate = useNavigate();

  const goRegister = (e) => {
    navigate("/registration");
  };
  const goLogin = (e) => {
    navigate("/login");
  };
  const enterGame = async (e) => {
    try {
      setUserAttempts({
        user_id: userData.user_id,
      });
      console.log(userData.user_id)
      const response = await fetch("http://localhost:3000/addAttempt", {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userAttempts),
      });
      if (!response.ok) {
        console.error("Fetch error:", response.status, response.statusText);
      } else {
        console.log(userData);
        navigate("/game");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="title-container">
      <div className="image-container">
        <img className="antique" src={antique} alt="Antique" />
      </div>
      <h2>
        Enter into the Dev Town Murder Mystery. It's a challenging puzzle where
        you'll solve the riddles to unravel the secrets. Can you expose the
        culprit before time runs out?
      </h2>
      <br />
      {isAuthenticated ? (
        <>
          <Button
            onClick={(e) => enterGame(e)}
            size="lg"
            className="custom-button"
          >
            START GAME
          </Button>
        </>
      ) : (
        <>
          <Button
            size="lg"
            className="custom-button"
            onClick={(e) => goRegister(e)}
          >
            REGISTER
          </Button>
          <Button
            size="lg"
            className="custom-button"
            onClick={(e) => goLogin(e)}
          >
            LOGIN
          </Button>
        </>
      )}
    </div>
  );
};

export default TitleScreen;
