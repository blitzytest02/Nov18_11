// Import the Express framework
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port - use environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Define the /hello endpoint
// This endpoint responds to HTTP GET requests with "Hello world"
app.get('/hello', (req, res) => {
  res.send('Hello world');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Try accessing: http://localhost:${PORT}/hello`);
});

// Handle server startup errors
app.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Please try a different port.`);
  } else {
    console.error('Server error:', error);
  }
});
