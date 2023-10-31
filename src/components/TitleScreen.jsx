// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Step1 from "../components/Step1";
// import Timer from "./Timer";
// import detective from "../assets/detective.png";
// import "../styles/TitleScreen.css";

// const TitleScreen = () => {
//   const [showStep1, setShowStep1] = useState(false);
//   const [showTimer, setShowTimer] = useState(false);

//   return (
//     <div className="title-container">
//       {/* {!user then display login and sign up
//             user then {<det. id} hide the login and sign up
//             } */}
//       <div className="image-container">
//         <img className="detective" src={detective} alt="Detective" />
//       </div>
//       <h2>
//         Welcome to our game. This is a mystery game that you must solve by
//         figuring out the correct clues. Will you be able to find the killer in
//         time?
//       </h2>
//       <Button
//         size="lg"
//         variant="danger"
//         onClick={() => {
//           setShowStep1(true);
//           setShowTimer(true);
//         }}
//       >
//         Play
//       </Button>{" "}
//       {showTimer && <Timer />}
//       {showStep1 && <Step1 />}
//     </div>
//   );
// };

// export default TitleScreen;


import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Step1 from "../components/Step1";
import Timer from "./Timer";
import detective from "../assets/detective.png";
import "../styles/TitleScreen.css";

const TitleScreen = () => {
  const [showStep1, setShowStep1] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div className="title-container">
      <div className="image-container">
        <img className="detective" src={detective} alt="Detective" />
      </div>
      <h2>
        Welcome to our game. This is a mystery game that you must solve by
        figuring out the correct clues. Will you be able to find the killer in
        time?
      </h2>
      <br />
      <Button
        size="lg"
        className="custom-button"
        onClick={() => {
          setShowStep1(true);
          setShowTimer(true);
        }}
      >
        Start Game
      </Button>{" "}
      {showTimer && <Timer />}
      {showStep1 && (
        <div className="scrollable-box"> {/* Wrap the Step1 content in a scrollable box */}
          <Step1 />
        </div>
      )}
    </div>
  );
};

export default TitleScreen;
