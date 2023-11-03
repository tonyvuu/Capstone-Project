// import React, { useState, useEffect } from "react";

// const Timer = () => {
//   const [time, setTime] = useState(30 * 60);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (time > 0) {
//         setTime(time - 1);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [time]);

//   const minutes = Math.floor(time / 60);
//   const seconds = time % 60;

//   const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
//     .toString()
//     .padStart(2, "0")}`;

//   return <div>
//     <h1>{formattedTime}</h1>
//   </div>;
// };

// export default Timer;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const [time, setTime] = useState(30 * 60);
  const navigate = useNavigate(); 

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(interval);
        navigate("/gameover");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time, navigate]);

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

