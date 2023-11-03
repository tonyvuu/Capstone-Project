// import React, { useState, useEffect } from "react";
// import "../styles/GameOver.css";
// import { TypeAnimation } from "react-type-animation";

// const GameOver = () => {
//   const gameoverText = `GAME OVER`;

//   const [showAdditionalText, setShowAdditionalText] = useState(false);

//   useEffect(() => {
//     const animationDuration = gameoverText.length * 300; // Adjust as needed

//     setTimeout(() => {
//       setShowAdditionalText(true);
//     }, animationDuration);
//   }, []);

//   return (
//     <div className="content-container">
//       <div className="centered-content">
//         <TypeAnimation
//           sequence={[gameoverText]}
//           speed={5}
//           style={{
//             fontSize: "10em",
//             fontWeight: "bold",
//             whiteSpace: "pre-line",
//             color: "red",
//           }}
//         />
//       </div>

//       {showAdditionalText && (
//         <div className="sub-text">
//           <div>
//             <p>The killer has found you</p>
//             {/* <button>Continue</button> */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GameOver;

import React, { useState, useEffect } from "react";
import "../styles/GameOver.css";
import { TypeAnimation } from "react-type-animation";

const GameOver = () => {
  const gameoverText = `GAME OVER`;

  const [showAdditionalText, setShowAdditionalText] = useState(false);

  useEffect(() => {
    const animationDuration = gameoverText.length * 300; // Adjust as needed

    setTimeout(() => {
      setShowAdditionalText(true);
    }, animationDuration + 1000); // Delay showing the subtext for an additional second
  }, []);

  return (
    <div className="content-container">
      <div className="centered-content">
        <TypeAnimation
          sequence={[gameoverText]}
          speed={1}
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
