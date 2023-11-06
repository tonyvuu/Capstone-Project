import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CompletionBarContext, MoveCountContext } from "../App";

const Timer = () => {
  const { setProgress } = useContext(CompletionBarContext);
  const { setMoveCount } = useContext(MoveCountContext);
  const [time, setTime] = useState(45 * 60);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(interval);

        setProgress(1);
        setMoveCount(0);

        navigate("/gameover");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time, navigate, setProgress, setMoveCount]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="timer">
      <h1>{formattedTime}</h1>
    </div>
  );
};

export default Timer;
