// Import Express.js framework
const express = require('express');

// Create Express application instance
const app = express();

// Configure port from environment or use default
const PORT = process.env.PORT || 3000;

// Route 1: Hello World endpoint
// Responds to GET requests at /hello path
app.get('/hello', (req, res) => {
  res.type('text/plain');
  res.send('Hello World');
});

// Route 2: Good Evening endpoint  
// Responds to GET requests at /evening path
app.get('/evening', (req, res) => {
  res.type('text/plain');
  res.send('Good evening');
});

// Optional: Custom 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).type('text/plain').send('404 Not Found');
});

// Start server and bind to configured port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
