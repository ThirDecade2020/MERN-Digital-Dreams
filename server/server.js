const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// A simple route for testing
app.get('/', (req, res) => {
  res.send('Hello from MERN Digital Dreams!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
