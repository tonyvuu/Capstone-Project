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
import { useHistory } from "react-router-dom"; // Import useHistory from React Router

const Timer = () => {
  const [time, setTime] = useState(30 * 60);
  const history = useHistory(); // Access the history object

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(interval); // Stop the timer
        history.push("/gameover"); // Redirect to the "Game Over" screen
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time, history]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div>
      <h1>{formattedTime}</h1>
    </div>
  );
};

export default Timer;

