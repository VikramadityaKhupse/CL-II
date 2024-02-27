// App.js
import React from 'react';
import './App.css'; // Make sure you have the necessary styles for App component
import LoginSignup from './components/LoginSignup/LoginSignup';
import Home from './Home'; // Import the Home component

function App() {
  return (
    <div>
      <LoginSignup />
      <Home /> {/* Include the Home component */}
    </div>
  );
}

export default App;
