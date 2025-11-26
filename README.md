# Node.js Express Tutorial

A beginner-friendly tutorial demonstrating HTTP server creation with Express.js framework, featuring two simple endpoints.

## Overview

This project teaches fundamental concepts of building web servers with Express.js by implementing two endpoints:
- `/hello` - Returns "Hello World"
- `/evening` - Returns "Good evening"

## Prerequisites

- Node.js (v14.0.0 or higher) installed
- npm (Node Package Manager) installed

## Installation

1. Clone or download this repository
2. Navigate to project directory
3. Install dependencies:

```bash
npm install
```

## Running the Server

Start the server using npm:

```bash
npm start
```

Or directly with Node.js:

```bash
node server.js
```

The server starts on port 3000 by default. You should see:

```
Server listening on port 3000
```

## Custom Port Configuration

Set a custom port using the PORT environment variable:

```bash
PORT=8080 node server.js
```

## Testing the Endpoints

### Using a Web Browser

Open your browser and navigate to:
- http://localhost:3000/hello - Displays "Hello World"
- http://localhost:3000/evening - Displays "Good evening"

### Using cURL

Test from command line:

```bash
# Test Hello World endpoint
curl http://localhost:3000/hello

# Test Good Evening endpoint
curl http://localhost:3000/evening

# Test 404 handling
curl http://localhost:3000/nonexistent
```

## Project Structure

```
.
├── server.js         # Main Express.js application
├── package.json      # Project metadata and dependencies
├── package-lock.json # Dependency lock file
├── .gitignore        # Git ignore rules
└── README.md         # This file
```

## Learning Objectives

This tutorial demonstrates:
- Setting up a Node.js project with npm
- Installing and importing Express.js
- Creating an Express application instance
- Defining route handlers for different endpoints
- Setting response content types
- Configuring environment-based port settings
- Implementing custom 404 error handling
- Starting an HTTP server with Express

## Code Explanation

### Key Components

**Express Application**: Created with `express()`, this is the core application object that manages routes and middleware.

**Route Handlers**: The `app.get()` method defines handlers for specific HTTP GET requests:
- `/hello` route returns "Hello World" as plain text
- `/evening` route returns "Good evening" as plain text

**Port Configuration**: Uses `process.env.PORT` to allow flexible port configuration via environment variables, with a fallback to port 3000.

**404 Handler**: Custom middleware catches all unmatched routes and returns a 404 Not Found response.

**Server Startup**: The `app.listen()` method binds the Express application to the specified port and starts accepting connections.

## License

MIT