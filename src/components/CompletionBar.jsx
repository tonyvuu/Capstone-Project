import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const CompletionBar = () => {
    const now = 0;
  return (
    <div>
        <ProgressBar now={now} label={`${now}%`} />

    </div>
  )
}

export default CompletionBar