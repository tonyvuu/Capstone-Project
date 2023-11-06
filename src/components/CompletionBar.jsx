import React, { useContext } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { CompletionBarContext } from '../App';
import "../styles/CompletionBar.css";
import MoveCount from './MoveCount';

const CompletionBar = () => {
  const { progress } = useContext(CompletionBarContext);

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <MoveCount />
      </div>
      {/* <h6 style={{ margin: '0 10px 0 0' }}>Story Progress</h6> */}
      <ProgressBar variant="success" className="custom-progress-bar" animated now={progress} style={{ width: '30%' }} />
    </div>
  );
}

export default CompletionBar;
