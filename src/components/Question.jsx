import React, { useState, useEffect } from "react";
import ReactMic from "react-mic";
import { Link } from "react-router-dom";

const Question = ({ question, onNext }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPreparationTime, setIsPreparationTime] = useState(true);

  useEffect(() => {
    let recordingTimer;

    if (isRecording) {
      recordingTimer = setTimeout(() => {
        setIsRecording(false);
        setIsPreparationTime(false);
        onNext(); // Move to the next question
      }, 20000); // 20 seconds for recording
    }

    return () => clearTimeout(recordingTimer);
  }, [isRecording, onNext]);

  const handleRecordButtonClick = () => {
    setIsPreparationTime(false);
    setIsRecording(true);
  };

  return (
    <div>
      <h2>Question:</h2>
      <p>{question}</p>
      {isPreparationTime && <p>Preparation time: 5 seconds</p>}
      {!isPreparationTime && (
        <div>
          <p>Recording time: 20 seconds</p>
          <ReactMic
            record={isRecording}
            className="sound-wave"
            onStop={() => {}}
            onData={() => {}}
            strokeColor="#000000"
            backgroundColor="#FFFFFF"
          />
        </div>
      )}
      <button onClick={handleRecordButtonClick} disabled={isRecording}>
        {isPreparationTime ? "Prepare for Recording" : "Recording..."}
      </button>
      {!isPreparationTime && <Link to="/thank-you">Next Question</Link>}
    </div>
  );
};

export default Question;
