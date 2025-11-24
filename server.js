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
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Try accessing: http://localhost:${PORT}/hello`);
});

// Handle server startup errors (errors are emitted by the server instance)
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Error: Port ${PORT} is already in use. Please try a different port.`);
    process.exit(1);
  } else {
    console.error('Server error:', error);
    process.exit(1);
  }
});

// Export the Express app instance for potential testing or extension
module.exports = app;
