import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    fetch('/api/test')
      .then(response => response.json())
      .then(data => setApiMessage(data.message))
      .catch(err => console.error("Error fetching API:", err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN Digital Dreams</h1>
        <p>{apiMessage ? apiMessage : 'Loading API data...'}</p>
      </header>
    </div>
  );
}

export default App;
