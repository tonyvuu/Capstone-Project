import React, { useContext } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { CompletionBarContext } from '../App';
import "../styles/CompletionBar.css";

const CompletionBar = () => {
  const { progress } = useContext(CompletionBarContext);

  return (
    <div>
      <ProgressBar className = "bar" animated now={progress} label={`${progress}%`} />
    </div>
  );
}

export default CompletionBar;
