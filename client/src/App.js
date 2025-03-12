// App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import MERNAnimation from './MERNAnimation';

function App() {
  const [apiMessage, setApiMessage] = useState('');
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    fetch('/api/test')
      .then(response => response.json())
      .then(data => setApiMessage(data.message))
      .catch(err => console.error('Error fetching API:', err));
  }, []);

  const handleClick = () => {
    setShowAnimation(true);
  };

  const handleAnimationEnd = () => {
    setShowAnimation(false);
  };

  return (
    <div className="App">
      {showAnimation ? (
        <MERNAnimation onAnimationEnd={handleAnimationEnd} />
      ) : (
        <header className="App-header">
          <h1>MERN Digital Dreams</h1>
          <p>{apiMessage ? apiMessage : 'Loading API data...'}</p>
          <button onClick={handleClick}>MERN</button>
        </header>
      )}
    </div>
  );
}

export default App;
