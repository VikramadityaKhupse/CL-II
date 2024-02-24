import React, { useState } from 'react';
import './App.css';
import StoryNode from './components/StoryNode';

function App() {
  const [currentNodeId, setCurrentNodeId] = useState('start');

  const handleChoice = (choiceNodeId) => {
    setCurrentNodeId(choiceNodeId);
  };

  return (
    <div className="App">
      <StoryNode nodeId={currentNodeId} onChoice={handleChoice} />
    </div>
  );
}

export default App;
