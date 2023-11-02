import React, { useContext } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { CompletionBarContext } from '../App';
import "../styles/CompletionBar.css";

const CompletionBar = () => {
  const { progress } = useContext(CompletionBarContext);

  return (
    <div className="d-flex justify-content-end"> 
      <h6 style={{ marginRight: '10px' }}>Story Progress</h6> 

      <ProgressBar variant="success" className="custom-progress-bar" animated now={progress} />
    </div>
  );
}

export default CompletionBar;