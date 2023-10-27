import React, { useContext } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { CompletionBarContext } from '../App';

const CompletionBar = () => {
  const { progress } = useContext(CompletionBarContext);

  return (
    <div>
      <ProgressBar now={progress} label={`${progress}%`} />
    </div>
  );
}

export default CompletionBar;
