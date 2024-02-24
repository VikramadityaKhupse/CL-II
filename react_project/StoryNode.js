import React from 'react';
import './StoryNode.css';

const storyData = {
  start: {
    text: "You wake up in a mysterious forest. What do you do?",
    choices: [
      { text: "Explore deeper into the forest", nextNode: "explore" },
      { text: "Follow a path leading out of the forest", nextNode: "path" }
    ]
  },
  explore: {
    text: "As you venture deeper into the forest, you stumble upon a hidden cave. What do you do?",
    choices: [
      { text: "Enter the cave", nextNode: "cave" },
      { text: "Continue exploring the forest", nextNode: "explore" }
    ]
  },
  path: {
    text: "You follow the path and find yourself in an open meadow. What do you do?",
    choices: [
      { text: "Explore the meadow", nextNode: "meadow" },
      { text: "Return to the forest", nextNode: "start" }
    ]
  },
  cave: {
    text: "Inside the cave, you find a treasure chest. What do you do?",
    choices: [
      { text: "Open the chest", nextNode: "treasure" },
      { text: "Leave the cave", nextNode: "explore" }
    ]
  },
  meadow: {
    text: "As you explore the meadow, you encounter a friendly unicorn. What do you do?",
    choices: [
      { text: "Approach the unicorn", nextNode: "approach" },
      { text: "Leave the meadow", nextNode: "start" }
    ]
  },
  treasure: {
    text: "Congratulations! You found the treasure and completed your adventure.",
    choices: []
  },
  approach: {
    text: "The unicorn greets you and offers to grant you a wish. What do you wish for?",
    choices: [
      { text: "Happiness", nextNode: "happiness" },
      { text: "Wealth", nextNode: "wealth" }
    ]
  },
  happiness: {
    text: "Your wish for happiness is granted, and you live happily ever after.",
    choices: []
  },
  wealth: {
    text: "Your wish for wealth is granted, but it brings you nothing but misery.",
    choices: []
  }
};

const StoryNode = ({ nodeId, onChoice }) => {
  const node = storyData[nodeId];

  const handleChoice = (choiceNodeId) => {
    onChoice(choiceNodeId);
  };

  return (
    <div className="StoryNode">
      <p>{node.text}</p>
      {node.choices.map((choice, index) => (
        <button key={index} onClick={() => handleChoice(choice.nextNode)}>
          {choice.text}
        </button>
      ))}
    </div>
  );
};

export default StoryNode;
