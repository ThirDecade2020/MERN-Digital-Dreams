// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// A simple test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the MERN backend!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
