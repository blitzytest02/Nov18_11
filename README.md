# Node.js Hello World Tutorial

A simple Node.js web application tutorial project that demonstrates how to create an HTTP server with Express.js and implement a basic endpoint.

## 📖 Description

This project serves as an introductory tutorial for building web applications with Node.js and Express.js. It implements a single HTTP endpoint (`/hello`) that responds with "Hello world" to demonstrate fundamental concepts of web server development.

## 🎯 Learning Objectives

By exploring this project, you will learn:

- How to set up a Node.js project with npm
- How to install and use the Express.js web framework
- How to create an HTTP server that listens for requests
- How to define routes and handle HTTP GET requests
- How to send responses back to clients
- Basic project structure and configuration for Node.js applications

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher, v20.x LTS recommended)
- **npm** (v10.x or higher, bundled with Node.js)

### Verify Installation

Check your installed versions:

```bash
node --version
npm --version
```

If you need to install Node.js, download it from [nodejs.org](https://nodejs.org/).

## 🚀 Installation

1. **Clone or download this repository** (if you haven't already)

2. **Navigate to the project directory:**
   ```bash
   cd nodejs-hello-tutorial
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

   This command will install Express.js v4.21.2 and its dependencies (approximately 70 packages total).

## ▶️ Usage

### Starting the Server

Run the application using the npm start script:

```bash
npm start
```

You should see output similar to:

```
Server is running on http://localhost:3000
Try accessing: http://localhost:3000/hello
```

The server is now running and ready to accept requests!

### Stopping the Server

Press `Ctrl+C` in the terminal to stop the server.

## 🧪 Testing the Endpoint

Once the server is running, you can test the `/hello` endpoint using several methods:

### Method 1: Using curl (Command Line)

```bash
curl http://localhost:3000/hello
```

**Expected Response:**
```
Hello world
```

### Method 2: Using a Web Browser

1. Open your web browser
2. Navigate to: `http://localhost:3000/hello`
3. You should see "Hello world" displayed on the page

### Method 3: Using a Different Port

You can run the server on a different port by setting the PORT environment variable:

```bash
PORT=8080 npm start
```

Then test with:
```bash
curl http://localhost:8080/hello
```

## 📁 Project Structure

```
nodejs-hello-tutorial/
├── node_modules/       # Dependencies (installed by npm)
├── .gitignore          # Git ignore patterns
├── package.json        # Project configuration and dependencies
├── package-lock.json   # Locked dependency versions
├── server.js           # Main application entry point
└── README.md           # This file
```

### File Descriptions

- **server.js**: Main application file containing the Express server setup and the `/hello` endpoint definition
- **package.json**: Node.js project manifest defining metadata, dependencies, and npm scripts
- **package-lock.json**: Auto-generated file ensuring consistent dependency installations
- **.gitignore**: Specifies files and directories that Git should ignore (e.g., node_modules/)

## 🔧 Troubleshooting

### Port Already in Use

**Error:** `Port 3000 is already in use`

**Solution:** Either stop the process using port 3000, or run the server on a different port:
```bash
PORT=8080 npm start
```

### Module Not Found

**Error:** `Cannot find module 'express'`

**Solution:** Install dependencies:
```bash
npm install
```

### Permission Denied (Linux/macOS)

**Error:** `EACCES: permission denied`

**Solution:** Don't use `sudo` with npm. If you have permission issues, fix npm permissions:
```bash
npm config set prefix ~/.npm-global
export PATH=~/.npm-global/bin:$PATH
```

### Node Version Too Old

**Error:** Compatibility issues or unexpected behavior

**Solution:** Upgrade to Node.js v18 or higher (v20 LTS recommended):
- Download from [nodejs.org](https://nodejs.org/)
- Or use a version manager like [nvm](https://github.com/nvm-sh/nvm)

## 🚀 Next Steps and Extensions

Once you're comfortable with this basic example, consider extending it:

1. **Add More Endpoints:**
   - Create a `/goodbye` endpoint with a different message
   - Add a root path `/` that serves a welcome message

2. **Accept Parameters:**
   - Implement route parameters: `/hello/:name`
   - Return personalized greetings: "Hello, [name]!"

3. **Handle Different HTTP Methods:**
   - Implement POST, PUT, DELETE endpoints
   - Accept and process request bodies

4. **Return JSON Responses:**
   - Send JSON data instead of plain text
   - Use `res.json()` for API responses

5. **Add More Features:**
   - Connect to a database (MongoDB, PostgreSQL)
   - Implement authentication and authorization
   - Add input validation and error handling
   - Serve static files (HTML, CSS, JavaScript)
   - Create a full REST API

## 📚 Additional Resources

- [Express.js Official Documentation](https://expressjs.com/)
- [Node.js Official Documentation](https://nodejs.org/docs/)
- [MDN Web Docs - HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [npm Documentation](https://docs.npmjs.com/)

## 📄 License

This project is licensed under the ISC License - a permissive open-source license.

---

**Happy Learning! 🎓**