import React, { useState } from "react";
import { Container, Segment } from "semantic-ui-react";
import './Home.css';
import { useSpeechSynthesis } from 'react-speech-kit';

function Home() {
  const [text, setText] = useState('');
  const { speak, pause, resume, cancel } = useSpeechSynthesis();

  // Function to handle file upload
  const handleFileUpload = (event) => {
    try {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileText = e.target.result;
        setText(fileText);
      };

      reader.readAsText(file);
    } catch (error) {
      console.error("Error occurred while reading the file:", error);
    }
  };

  const handleOnClick = () => {
    try {
      speak({ text: text });
    } catch (error) {
      console.error("Error occurred while speaking:", error);
    }
  }

  const handlePauseClick = () => {
    try {
      pause();
    } catch (error) {
      console.error("Error occurred while pausing:", error);
    }
  }

  const handleResumeClick = () => {
    try {
      resume();
    } catch (error) {
      console.error("Error occurred while resuming:", error);
    }
  }

  const handleStopClick = () => {
    try {
      cancel();
    } catch (error) {
      console.error("Error occurred while stopping:", error);
    }
  }

  return (
    <Container>
      <Segment>
        <h1>Text Story To Speech!</h1>
        
        <input
          type="file"
          accept=".txt"
          onChange={handleFileUpload}
        />
        <textarea className="textAreaStyle" value={text} onChange={(e) => { setText(e.target.value) }}></textarea>
        <nav>
          <ul>
            <button className="buttonStyle" id="Listen" onClick={handleOnClick}>Listen</button>
            <button className="buttonStyle" id="Pause" onClick={handlePauseClick}>Pause</button>
            <button className="buttonStyle" id="Resume" onClick={handleResumeClick}>Resume</button>
            <button className="buttonStyle" id="Stop" onClick={handleStopClick}>Stop</button>
          </ul>
        </nav>
      </Segment>
    </Container>
  );
}

export default Home;