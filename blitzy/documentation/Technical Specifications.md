# Technical Specification

# 0. Agent Action Plan

## 0.1 Intent Clarification and Requirements Analysis

### 0.1.1 Core Objective

**Based on the provided requirements, the Blitzy platform understands that the objective is to migrate the Node.js HTTP server from a vanilla `http` module implementation to an Express.js framework-based architecture, while adding new endpoint functionality.**

The user has requested:

**User Request (Exact Quote):**
> "this is a tutorial of node js server hosting one endpoint that returns the response "Hello world". Could you add expressjs into the project and add another endpoint that return the reponse of "Good evening"?"

### 0.1.2 Request Categorization

This request represents a **hybrid implementation task** combining:

- **Architectural Refactoring**: Migration from Zero Framework Architecture to Express.js framework
- **Feature Addition**: Implementation of a new endpoint returning "Good evening"
- **Framework Integration**: Introduction of npm package management and Express.js dependency
- **Backward Compatibility**: Preservation of existing `/hello` endpoint behavior

### 0.1.3 Technical Interpretation

**The Blitzy platform interprets these requirements as follows:**

The user is requesting a fundamental architectural transformation of the existing Node.js tutorial project. While the current technical specification documents a "Zero Framework Architecture" philosophy that deliberately excludes Express.js for educational purposes, the user now wishes to adopt Express.js as the web framework. This represents a strategic pivot from teaching fundamental HTTP concepts through vanilla Node.js APIs to demonstrating modern web development practices using industry-standard frameworks.

**Translation to Technical Actions:**

- **Initialize npm project**: Create `package.json` to manage dependencies
- **Install Express.js**: Add Express.js as a production dependency with version compatible with Node.js v20.19.5
- **Create Express application**: Implement Express.js server replacing the vanilla `http.createServer()` approach
- **Migrate existing endpoint**: Convert GET `/hello` endpoint from vanilla Node.js routing to Express.js route handler, maintaining "Hello World" response
- **Implement new endpoint**: Add GET endpoint returning "Good evening" response following Express.js patterns
- **Update project documentation**: Revise README.md to reflect Express.js usage and new endpoint availability

### 0.1.4 Implicit Requirements and Design Decisions

**The Blitzy platform has identified the following implicit requirements not explicitly stated but necessary for complete implementation:**

- **Error handling**: Implement Express.js error handling middleware for robust request processing
- **Port configuration**: Maintain environment variable-based port configuration (PORT environment variable with default fallback)
- **Response format consistency**: Both endpoints should return plain text responses with appropriate Content-Type headers
- **HTTP method specificity**: Both endpoints should respond only to GET requests; other methods should return 405 Method Not Allowed
- **Path exactness**: Routes should match exact paths (/hello and the new endpoint) without wildcard or parameter matching
- **Startup logging**: Server should log startup confirmation message indicating listening port
- **Educational clarity**: Code should maintain tutorial-appropriate simplicity with clear, commented examples suitable for Node.js learners
- **Minimal dependencies**: Only Express.js should be added; avoid additional middleware or utility libraries unless absolutely necessary

### 0.1.5 Endpoint Naming Decision

**Critical Design Question**: The user specified adding "another endpoint that return the reponse of 'Good evening'" but did not specify the endpoint path.

**Blitzy Platform Decision:**

Based on the existing pattern where the `/hello` endpoint returns "Hello World", the new endpoint will be implemented as:

- **Path**: `/evening` or `/goodbye` (to be confirmed with user if needed, defaulting to `/evening` for semantic consistency)
- **Method**: GET
- **Response**: "Good evening" (exact text as specified)
- **Content-Type**: text/plain (matching existing endpoint)

**Rationale**: The path `/evening` semantically corresponds to the "Good evening" greeting response, creating a clear relationship between URL structure and response content that aids learning comprehension.

### 0.1.6 Architectural Shift Acknowledgment

**CRITICAL CONTEXT**: The existing technical specification (Section 3.3.1) explicitly documents a "Zero Framework Architecture" design decision that intentionally excludes Express.js. The documented rationale emphasizes:

- Teaching fundamental HTTP concepts without framework abstraction
- Minimizing cognitive load for Node.js beginners
- Eliminating external dependencies

**This user request represents a conscious departure from that documented architecture**, shifting the educational approach from "fundamentals-first" to "industry-standard practices." This change impacts multiple sections of the technical specification, requiring updates to:

- Section 3.3 Frameworks and Libraries (removing Zero Framework policy)
- Section 5.2 Component Details (refactoring component architecture)
- Section 3.4 Open Source Dependencies (adding Express.js)
- Section 8.2 Local Development Environment (adding npm dependency installation)

The Blitzy platform will implement this architectural shift while maintaining the tutorial's educational objectives through clear, well-commented Express.js code that remains accessible to beginners.

## 0.2 Technical Scope Analysis

### 0.2.1 Current State Assessment

**Repository Analysis Results:**

The repository currently contains minimal implementation:

- **Existing Files**: Only `README.md` containing a single heading "# Nov18_11"
- **No Implementation Files**: No JavaScript source files, no package.json, no Node.js server implementation
- **No Dependencies**: No node_modules directory, no package-lock.json
- **Git Repository**: Version control initialized but no substantive commits

**Conclusion**: The project is in the planning/specification phase with comprehensive technical documentation but no actual code implementation. This provides a clean slate for Express.js implementation without legacy code refactoring concerns.

### 0.2.2 Express.js Version Selection and Compatibility

**Environment Details:**

- **Node.js Version**: v20.19.5 (currently installed)
- **npm Version**: v10.8.2 (currently installed)
- **Target Express.js Version**: 4.21.1 (latest stable as of November 2024)

**Version Compatibility Verification:**

Express.js 4.x series maintains broad Node.js compatibility. Version 4.21.1 supports Node.js versions from 0.10 through 22.x, ensuring full compatibility with the installed Node.js v20.19.5.

**Dependency Selection Rationale:**

- **Express.js 4.x vs 5.x**: Version 4.x is production-proven, widely documented, and tutorial-friendly; Express 5.x remains in beta and introduces breaking changes unsuitable for a beginner tutorial
- **Minimal Dependencies**: Express.js 4.21.1 brings only essential transitive dependencies (body-parser, cookie, debug, etc.) without bloat
- **Long-Term Support**: Express 4.x has extensive community support, comprehensive tutorials, and stable API surface

### 0.2.3 Implementation Components Overview

**New Components to Create:**

| Component | File Path | Purpose | Implementation Approach |
|-----------|-----------|---------|------------------------|
| Package Manifest | package.json | Define project metadata and dependencies | Initialize with npm init, configure Express.js dependency |
| Express Server | server.js or index.js | Main application entry point | Create Express app, define routes, start server |
| Environment Config | .env (optional) | Store configuration variables | Optional file for PORT configuration |
| Git Ignore | .gitignore | Exclude node_modules from version control | Standard Node.js .gitignore template |
| Updated README | README.md | Document project usage and setup | Replace placeholder with Express.js tutorial instructions |

### 0.2.4 Endpoint Specification

**Endpoint 1: Existing Hello World Endpoint (Migration)**

- **Path**: `/hello`
- **HTTP Method**: GET
- **Response Status**: 200 OK
- **Response Content-Type**: text/plain
- **Response Body**: "Hello World" (exact match to specification)
- **Implementation**: Express route handler using `app.get('/hello', handler)`
- **Source of Requirement**: Existing technical specification Section 5.2.3

**Endpoint 2: New Good Evening Endpoint**

- **Path**: `/evening` (semantic choice based on response content)
- **HTTP Method**: GET
- **Response Status**: 200 OK
- **Response Content-Type**: text/plain
- **Response Body**: "Good evening" (user-specified exact text)
- **Implementation**: Express route handler using `app.get('/evening', handler)`
- **Source of Requirement**: User request

**Default Endpoint: 404 Not Found**

- **Path**: All other paths
- **HTTP Method**: All methods
- **Response Status**: 404 Not Found
- **Response Body**: "Cannot GET [path]" (Express.js default) or custom message
- **Implementation**: Express default behavior or custom 404 middleware

### 0.2.5 Port Configuration Strategy

**Configuration Source Hierarchy** (following existing specification pattern):

1. **Environment Variable**: `PORT` environment variable takes highest precedence
2. **Default Value**: Port 3000 (Express.js convention) if PORT not specified
3. **Configuration Access**: `process.env.PORT || 3000`

**Startup Behavior:**

- Server binds to `0.0.0.0` (all interfaces) or `localhost` (127.0.0.1) based on deployment context
- Console log message confirms successful startup: `Server listening on port 3000` or equivalent
- Port binding errors (EADDRINUSE) handled by Node.js/Express error event handlers

### 0.2.6 Code Structure and Organization

**Single-File vs Multi-File Architecture:**

For this tutorial project, a **single-file architecture** is recommended:

- **File**: `server.js` or `index.js` containing all server logic
- **Rationale**: Maintains tutorial simplicity, reduces cognitive load, keeps all code visible in one location
- **Lines of Code**: Estimated 20-30 lines including comments and whitespace

**Alternative Multi-File Structure** (if complexity grows):

```
project-root/
├── server.js           # Server initialization and startup
├── routes/
│   ├── hello.js       # /hello endpoint handler
│   └── evening.js     # /evening endpoint handler
├── package.json
├── .gitignore
└── README.md
```

**Recommendation**: Start with single-file; refactor to multi-file only if additional endpoints or middleware are added beyond the current scope.

### 0.2.7 Testing and Validation Approach

**Manual Testing Strategy:**

Since this is an educational tutorial, automated testing is intentionally excluded to maintain simplicity. Validation will occur through:

1. **Server Startup**: Verify server starts without errors and logs listening message
2. **Browser Testing**: Open `http://localhost:3000/hello` and `http://localhost:3000/evening` in browser
3. **cURL Testing**: Execute `curl http://localhost:3000/hello` and verify "Hello World" response
4. **404 Validation**: Request non-existent path and verify 404 response
5. **Method Validation**: Send POST/PUT/DELETE to endpoints and verify appropriate responses

**No Automated Test Suite**: Following the existing specification's exclusion of testing frameworks (Section 3.3.3.1), no Jest, Mocha, or other test frameworks will be added.

### 0.2.8 Documentation Requirements

**README.md Updates Required:**

The README.md must be transformed from a placeholder into comprehensive tutorial documentation including:

- **Project Description**: What the server does and its educational purpose
- **Prerequisites**: Node.js and npm installation requirements
- **Installation Steps**: `npm install` command to install Express.js
- **Running the Server**: `node server.js` or `npm start` command
- **Testing the Endpoints**: cURL or browser examples for both endpoints
- **Environment Variables**: How to set PORT environment variable
- **Project Structure**: Brief explanation of file organization
- **Learning Objectives**: What concepts this tutorial teaches

### 0.2.9 Dependencies Beyond Express.js

**Assessment**: No additional dependencies required.

The implementation will use:

- **Express.js**: Core framework for HTTP server and routing
- **Node.js Built-ins**: `process.env` for environment variables, `console.log` for logging

**Explicitly Excluded Dependencies:**

- **body-parser**: Not needed (no request body parsing required for GET endpoints)
- **cors**: Not needed (no cross-origin requirements for simple tutorial)
- **helmet**: Not needed (security middleware inappropriate for basic tutorial)
- **morgan**: Not needed (request logging not required for educational scope)
- **dotenv**: Optional but not required (environment variables can be set via shell)
- **nodemon**: Optional development dependency for auto-restart but not core to tutorial

### 0.2.10 Development Workflow

**Standard Development Commands:**

| Command | Purpose | Implementation |
|---------|---------|----------------|
| `npm init -y` | Initialize package.json | Run once during setup |
| `npm install express` | Install Express.js dependency | Run once during setup |
| `node server.js` | Start the server | Run to test implementation |
| `npm start` | Start via npm script | Configured in package.json scripts |
| `PORT=8080 node server.js` | Start on custom port | Environment variable configuration |
| `ctrl+C` | Stop the server | Signal interrupt to Node.js process |

**No Build Process Required:**

As a plain JavaScript project without transpilation, bundling, or compilation, no build tools (Webpack, Babel, etc.) are necessary. Direct Node.js execution of source files suffices.

## 0.3 Implementation Design and Architecture

### 0.3.1 Express.js Application Structure

**Core Implementation Pattern:**

The Express.js implementation will follow this architectural flow:

```
Initialize Express → Define Routes → Configure Error Handling → Start Server
```

**Component Responsibilities:**

- **Express Application Instance**: Created via `express()`, serves as the central application object managing middleware and routes
- **Route Handlers**: Individual functions responding to specific path and method combinations
- **Error Middleware**: Catches and handles errors occurring during request processing
- **Server Listener**: Binds Express app to network port and begins accepting connections

### 0.3.2 Code Implementation Blueprint

**Minimal Express.js Server Structure:**

```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Route 1: /hello endpoint
app.get('/hello', (req, res) => {
  res.type('text/plain');
  res.send('Hello World');
});

// Route 2: /evening endpoint  
app.get('/evening', (req, res) => {
  res.type('text/plain');
  res.send('Good evening');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```

**Code Explanation:**

- **Lines 1-3**: Import Express, create app instance, configure port
- **Lines 5-9**: Define /hello route handler returning "Hello World"
- **Lines 11-15**: Define /evening route handler returning "Good evening"
- **Lines 17-20**: Bind server to port and log startup confirmation

### 0.3.3 Route Handler Design

**Handler Pattern Selection:**

Express.js supports multiple handler patterns. For this tutorial, inline arrow functions provide maximum clarity:

**Pattern Choice: Inline Arrow Functions**

```javascript
app.get('/hello', (req, res) => {
  res.send('Hello World');
});
```

**Alternative Patterns (Not Recommended for Beginners):**

```javascript
// Named function (more verbose)
function helloHandler(req, res) {
  res.send('Hello World');
}
app.get('/hello', helloHandler);

// Separate route module (unnecessary for 2 endpoints)
const helloRoute = require('./routes/hello');
app.use('/hello', helloRoute);
```

**Rationale**: Inline arrow functions keep route logic co-located with route definitions, improving readability for tutorial purposes.

### 0.3.4 Response Configuration Strategy

**Content-Type Header Setting:**

Two approaches for setting response Content-Type to text/plain:

**Option 1: Explicit Type Setting (Recommended)**

```javascript
app.get('/hello', (req, res) => {
  res.type('text/plain');
  res.send('Hello World');
});
```

**Option 2: Combined Send with Type**

```javascript
app.get('/hello', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello World');
});
```

**Recommendation**: Use `res.type('text/plain')` for semantic clarity and brevity.

### 0.3.5 Error Handling Architecture

**Express Default Error Handling:**

Express provides default error handling for:

- **404 Not Found**: Automatically responds with 404 status for undefined routes
- **500 Internal Server Error**: Catches synchronous errors in route handlers
- **Method Not Allowed**: Returns 404 by default (not 405) for wrong methods on defined paths

**Enhanced Error Handling (Optional):**

For improved educational value, add custom 404 middleware:

```javascript
// 404 handler (must be after all routes)
app.use((req, res) => {
  res.status(404).type('text/plain').send('404 Not Found');
});
```

**Error Handler Placement**: Must appear after all route definitions to catch unmatched requests.

### 0.3.6 Server Lifecycle Management

**Startup Sequence:**

1. **Module Import**: Load Express.js via `require('express')`
2. **App Creation**: Initialize Express application instance
3. **Route Registration**: Define all route handlers
4. **Error Middleware**: Configure 404 and error handlers
5. **Port Binding**: Call `app.listen()` with port and callback
6. **Startup Logging**: Execute callback logging server ready message

**Shutdown Handling:**

Express automatically handles:

- **Ctrl+C (SIGINT)**: Node.js terminates process, closing all connections
- **Process Kill (SIGTERM)**: Standard signal handling terminates gracefully
- **Uncaught Exceptions**: Node.js default behavior logs and exits

**No Graceful Shutdown Required**: For tutorial simplicity, advanced shutdown logic (draining connections, cleanup hooks) is intentionally omitted.

### 0.3.7 Environment Variable Configuration

**PORT Environment Variable Usage:**

```javascript
const PORT = process.env.PORT || 3000;
```

**Configuration Options:**

- **Shell Environment**: `PORT=8080 node server.js`
- **.env File + dotenv**: `PORT=8080` in .env file with dotenv package (optional)
- **System Environment**: Permanent environment variable via OS configuration
- **Default Fallback**: 3000 used if PORT not specified

**No Additional Configuration Variables**: The simple nature of this tutorial requires no database URLs, API keys, or other environment configuration.

### 0.3.8 Logging Strategy

**Startup Logging:**

```javascript
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```

**Request Logging:**

For basic tutorial, no per-request logging implemented. Express does not log requests by default.

**Optional Request Logging** (if desired for educational purposes):

```javascript
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});
```

**Recommendation**: Omit request logging to maintain simplicity unless explicitly requested.

### 0.3.9 Comparison: Vanilla Node.js vs Express.js

**Architectural Differences:**

| Aspect | Vanilla Node.js (Current Spec) | Express.js (New Implementation) |
|--------|-------------------------------|--------------------------------|
| Server Creation | `http.createServer(handler)` | `express()` then `app.listen()` |
| Routing Logic | Manual if/else path checking | `app.get(path, handler)` method routing |
| Response Headers | `res.setHeader()` and `res.statusCode` | `res.type()` and `res.status()` chainable methods |
| Response Body | `res.write()` then `res.end()` | `res.send()` single method |
| Code Volume | ~30-40 lines | ~20 lines |
| Route Addition | Add if/else branch in routing function | Add single `app.get()` call |
| Error Handling | Manual try/catch and error responses | Automatic 404 and 500 handling |
| Learning Curve | Teaches HTTP fundamentals | Teaches framework patterns |

**Key Simplification**: Express eliminates manual routing logic, header management, and response construction verbosity.

### 0.3.10 Testing and Validation Design

**Manual Testing Protocol:**

**Test 1: Server Startup**

```bash
node server.js
# Expected output: "Server listening on port 3000"
```

**Test 2: /hello Endpoint**

```bash
curl http://localhost:3000/hello
# Expected output: "Hello World"
# Expected Content-Type: text/plain
```

**Test 3: /evening Endpoint**

```bash
curl http://localhost:3000/evening
# Expected output: "Good evening"
# Expected Content-Type: text/plain
```

**Test 4: 404 Handling**

```bash
curl http://localhost:3000/nonexistent
# Expected status: 404
# Expected output: "Cannot GET /nonexistent" or custom 404 message
```

**Test 5: Browser Validation**

- Open http://localhost:3000/hello in browser → displays "Hello World"
- Open http://localhost:3000/evening in browser → displays "Good evening"
- Open http://localhost:3000/invalid → displays 404 error

### 0.3.11 Implementation Phases

**Phase 1: Project Initialization**

- Create package.json via `npm init -y`
- Install Express.js via `npm install express`
- Create .gitignore to exclude node_modules

**Phase 2: Server Implementation**

- Create server.js with Express app initialization
- Define /hello route handler
- Define /evening route handler
- Configure server listening

**Phase 3: Validation**

- Start server and verify startup message
- Test both endpoints with cURL or browser
- Validate response content and headers

**Phase 4: Documentation**

- Update README.md with comprehensive tutorial instructions
- Document installation, usage, and testing procedures
- Include learning objectives and code explanations

**Estimated Total Implementation Time**: 15-20 minutes for experienced developer; 1-2 hours for comprehensive documentation.

## 0.4 File Transformation Mapping

### 0.4.1 Complete File Transformation Table

| Target File | Transformation | Source/Reference | Purpose and Changes |
|-------------|----------------|------------------|---------------------|
| package.json | CREATE | Generated via `npm init -y` | Define project metadata, specify Express.js dependency, configure start script |
| server.js | CREATE | Implementation blueprint in Section 0.3 | Main application entry point with Express.js server, route definitions, and startup logic |
| .gitignore | CREATE | Standard Node.js .gitignore template | Exclude node_modules, .env, and other generated files from version control |
| README.md | UPDATE | Existing README.md | Replace placeholder content with comprehensive tutorial documentation |
| .env | CREATE (Optional) | None | Optional environment variable configuration for PORT and other settings |
| package-lock.json | AUTO-GENERATED | Created by npm install | Lock file generated automatically during dependency installation |
| node_modules/ | AUTO-GENERATED | Created by npm install | Directory containing Express.js and transitive dependencies |

### 0.4.2 Detailed File Specifications

#### 0.4.2.1 package.json - CREATE

**Purpose**: Define project as npm package with Express.js dependency.

**Creation Method**: `npm init -y` followed by manual edits.

**Required Content Structure**:

```json
{
  "name": "nov18_11",
  "version": "1.0.0",
  "description": "Node.js Express tutorial with Hello World and Good Evening endpoints",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "keywords": ["express", "tutorial", "nodejs", "http"],
  "author": "",
  "license": "MIT",
  "dependencies": {
    "express": "^4.21.1"
  }
}
```

**Key Fields Explanation**:

- **name**: Package name (derived from directory name or custom)
- **version**: Semantic version starting at 1.0.0
- **main**: Entry point file (server.js)
- **scripts.start**: Convenient `npm start` command to launch server
- **dependencies.express**: Express.js version constraint using caret (^) for compatible minor/patch updates

**Implementation Commands**:

```bash
npm init -y
npm install express --save
```

#### 0.4.2.2 server.js - CREATE

**Purpose**: Main application file implementing Express.js server with two endpoints.

**File Location**: Project root directory (same level as package.json).

**Complete Implementation**:

```javascript
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
```

**Lines of Code**: 28 lines including comments and blank lines.

**Key Implementation Details**:

- **Line 2**: CommonJS require() for Express.js import
- **Line 5**: Express application instance creation
- **Line 8**: Environment variable PORT with fallback to 3000
- **Lines 12-15**: /hello route handler with text/plain Content-Type
- **Lines 19-22**: /evening route handler following same pattern
- **Lines 25-27**: Optional custom 404 middleware
- **Lines 30-32**: Server binding with startup confirmation log

#### 0.4.2.3 .gitignore - CREATE

**Purpose**: Exclude generated files and dependencies from Git version control.

**File Location**: Project root directory.

**Required Content**:

```
# Dependencies
node_modules/
package-lock.json

#### Environment variables
.env
.env.local
.env.*.local

#### Logs
logs/
*.log
npm-debug.log*

#### Operating System
.DS_Store
Thumbs.db

#### IDE
.vscode/
.idea/
*.swp
*.swo
```

**Rationale for Exclusions**:

- **node_modules/**: Large directory with all dependencies (can be regenerated with `npm install`)
- **package-lock.json**: Optional exclusion (some projects include this; depends on team policy)
- **.env**: Contains sensitive configuration; should never be committed
- **Logs**: Runtime-generated log files unnecessary in version control
- **OS/IDE files**: Platform-specific files irrelevant to project functionality

#### 0.4.2.4 README.md - UPDATE

**Purpose**: Transform placeholder README into comprehensive tutorial documentation.

**Current Content**: Single line `# Nov18_11`

**New Content Structure**:

```
# Node.js Express Tutorial

A beginner-friendly tutorial demonstrating HTTP server creation with Express.js framework, featuring two simple endpoints.

#### Overview

This project teaches fundamental concepts of building web servers with Express.js by implementing two endpoints:
- `/hello` - Returns "Hello World"
- `/evening` - Returns "Good evening"

#### Prerequisites

- Node.js (v14.0.0 or higher) installed
- npm (Node Package Manager) installed

#### Installation

1. Clone or download this repository
2. Navigate to project directory
3. Install dependencies:

```bash
npm install
```

#### Running the Server

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

#### Custom Port Configuration

Set a custom port using the PORT environment variable:

```bash
PORT=8080 node server.js
```

#### Testing the Endpoints

#### Using a Web Browser

Open your browser and navigate to:
- http://localhost:3000/hello - Displays "Hello World"
- http://localhost:3000/evening - Displays "Good evening"

#### Using cURL

Test from command line:

```bash
curl http://localhost:3000/hello
# Output: Hello World

curl http://localhost:3000/evening
# Output: Good evening
```

#### Project Structure

```
project-root/
├── server.js       # Main application file with Express server
├── package.json    # Project configuration and dependencies
├── .gitignore      # Git ignore rules
└── README.md       # This file
```

#### What You'll Learn

- Installing and importing Express.js framework
- Creating an Express application instance
- Defining route handlers with `app.get()`
- Setting response Content-Type headers
- Sending text responses
- Configuring server port from environment variables
- Starting an HTTP server with Express

#### Dependencies

- **Express.js** (^4.21.1) - Web application framework for Node.js

#### License

MIT
```

**Content Changes Summary**:

- Replace single heading with full tutorial documentation
- Add installation, usage, and testing instructions
- Include code examples and expected outputs
- Document project structure and learning objectives
- Provide troubleshooting guidance

#### 0.4.2.5 .env - CREATE (Optional)

**Purpose**: Store environment variables for local development.

**File Location**: Project root directory.

**Content Example**:

```
PORT=3000
```

**Usage Note**: This file is optional. Environment variables can alternatively be set via:

- Shell export: `export PORT=3000`
- Inline with command: `PORT=3000 node server.js`
- System environment variables

**If Created**: Must add `dotenv` package and load in server.js:

```javascript
require('dotenv').config();
const PORT = process.env.PORT || 3000;
```

**Recommendation**: Omit .env file for tutorial simplicity; document inline environment variable usage instead.

### 0.4.3 Auto-Generated Files

**These files are automatically created by npm and should not be manually edited:**

#### 0.4.3.1 package-lock.json

- **Generated By**: `npm install` command
- **Purpose**: Lock exact dependency versions for reproducible installations
- **Size**: ~15KB (contains Express.js and ~50 transitive dependencies)
- **Version Control**: Optional inclusion (some teams exclude, others include)

#### 0.4.3.2 node_modules/

- **Generated By**: `npm install` command
- **Purpose**: Contains all installed npm packages
- **Size**: ~6-8 MB (Express.js and dependencies)
- **Version Control**: Always excluded via .gitignore
- **Contents**: ~50 packages including Express.js, body-parser, cookie, debug, etc.

### 0.4.4 Files Explicitly NOT Created

**The following files are intentionally excluded to maintain tutorial simplicity:**

- **test/** directory: No automated testing for educational scope
- **routes/** directory: No route modularization for 2 simple endpoints
- **middleware/** directory: No custom middleware required
- **config/** directory: No complex configuration management
- **controllers/** directory: No MVC architecture for simple tutorial
- **models/** directory: No database or data modeling
- **.eslintrc.js**: No linting configuration (optional for learners)
- **Dockerfile**: No containerization for local tutorial
- **docker-compose.yml**: No container orchestration
- **.github/workflows/**: No CI/CD pipelines

### 0.4.5 File Creation Order

**Recommended implementation sequence:**

1. **package.json**: Initialize project with `npm init -y`
2. **.gitignore**: Create before installing dependencies to avoid committing node_modules
3. **Express.js Installation**: Run `npm install express` (generates package-lock.json and node_modules)
4. **server.js**: Implement Express application with route handlers
5. **README.md**: Update with comprehensive documentation
6. **.env** (if needed): Create for environment variable management

### 0.4.6 Validation Checklist

**After file creation, verify:**

- [ ] package.json exists with express dependency listed
- [ ] server.js exists with valid JavaScript syntax
- [ ] .gitignore exists and excludes node_modules
- [ ] node_modules directory exists with Express.js installed
- [ ] README.md contains comprehensive tutorial documentation
- [ ] `node server.js` starts server without errors
- [ ] Endpoints respond correctly to GET requests
- [ ] 404 handler works for undefined routes

## 0.5 Dependency Inventory and Package Management

### 0.5.1 Production Dependencies

| Registry | Package Name | Version | Purpose | Installation Command |
|----------|--------------|---------|---------|---------------------|
| npm | express | ^4.21.1 | Fast, unopinionated web framework for Node.js; provides HTTP server, routing, middleware system, and response helpers | `npm install express` |

**Version Constraint Explanation**:

- **Caret (^)**: The `^4.21.1` version constraint allows npm to install compatible updates
  - Permits: 4.21.2, 4.22.0, 4.30.0 (minor and patch updates)
  - Blocks: 5.0.0 (major version changes with potential breaking changes)
  - Rationale: Balances stability with security/bug fix updates

### 0.5.2 Express.js Transitive Dependencies

**Express.js automatically installs the following dependencies** (approximate versions as of Express 4.21.1):

| Package | Purpose | Why Included |
|---------|---------|--------------|
| accepts | Content negotiation based on Accept headers | HTTP content type handling |
| array-flatten | Flattens nested arrays | Internal utility for Express routing |
| body-parser | Parses incoming request bodies | Middleware for POST/PUT data (though not used in this tutorial) |
| content-disposition | Creates Content-Disposition headers | File download header generation |
| cookie | HTTP cookie parsing and serialization | Cookie handling functionality |
| debug | Small debugging utility | Development logging (controlled via DEBUG env var) |
| depd | Deprecation warnings | Alerts about deprecated API usage |
| encodeurl | Safely encode URLs | URL encoding utility |
| escape-html | Escape HTML entities | XSS prevention in error messages |
| etag | ETag header generation | HTTP caching support |
| finalhandler | Final request handler | Default 404/error handling |
| fresh | HTTP freshness checking | Cache validation |
| merge-descriptors | Object property merging | Utility for Express internals |
| methods | HTTP method list | Validation of HTTP methods |
| on-finished | Execute callback when HTTP response finishes | Request completion detection |
| parseurl | URL parsing with caching | Performance-optimized URL parsing |
| path-to-regexp | Convert path strings to regular expressions | Route pattern matching |
| proxy-addr | Determine client IP address | IP address resolution behind proxies |
| qs | Query string parsing | URL query parameter handling |
| range-parser | HTTP Range header parsing | Partial content support |
| safe-buffer | Safer Buffer API | Security-hardened buffer operations |
| send | Streaming file transfer | Static file serving |
| serve-static | Static file serving middleware | Public directory hosting |
| setprototypeof | Set object prototype | Internal utility |
| statuses | HTTP status code utilities | Status message lookup |
| type-is | Media type checking | Content-Type validation |
| utils-merge | Object merging utility | Configuration merging |
| vary | Vary header management | HTTP cache variation handling |

**Total Dependency Count**: ~50 packages including Express.js itself and all transitive dependencies.

**Total Installation Size**: Approximately 6-8 MB in node_modules directory.

### 0.5.3 Development Dependencies

**None Required** for this tutorial project.

**Commonly Used Development Dependencies (Intentionally Excluded)**:

| Package | Purpose | Why Excluded |
|---------|---------|--------------|
| nodemon | Auto-restart server on file changes | Simplifies tutorial; manual restart teaches process lifecycle |
| eslint | JavaScript linting and code quality | Not essential for basic tutorial; may overwhelm beginners |
| prettier | Code formatting | Style enforcement unnecessary for small codebase |
| jest | Testing framework | No automated testing in scope per specification |
| supertest | HTTP assertion library | No testing infrastructure required |
| dotenv | Load environment variables from .env file | Simple PORT config doesn't justify dependency |

**Recommendation**: For learning purposes, avoid development dependencies initially. Introduce them in advanced tutorials after fundamentals are mastered.

### 0.5.4 Peer Dependencies

**None Required**: Express.js has no peer dependencies requiring explicit installation.

### 0.5.5 Optional Dependencies

**None Configured**: Express.js optional dependencies are not used in this basic tutorial.

### 0.5.6 Dependency Installation Process

**Initial Installation (First-Time Setup)**:

```bash
# Step 1: Initialize npm project
npm init -y

#### Step 2: Install Express.js
npm install express

#### Alternatively, specify exact version
npm install express@4.21.1
```

**Installation Results**:

- Creates `node_modules/` directory with Express.js and dependencies
- Generates `package-lock.json` with exact dependency tree
- Updates `package.json` with express in dependencies section

**Subsequent Installations (Other Developers)**:

```bash
# Install all dependencies from package.json
npm install

#### Or using shorthand
npm i
```

**Clean Installation (Remove and Reinstall)**:

```bash
# Remove existing node_modules
rm -rf node_modules package-lock.json

#### Reinstall from package.json
npm install
```

### 0.5.7 Package Version Verification

**Verify Installed Express.js Version**:

```bash
npm list express
```

**Expected Output**:

```
nov18_11@1.0.0 /path/to/project
└── express@4.21.1
```

**Check for Dependency Vulnerabilities**:

```bash
npm audit
```

**Update Express.js (If Needed)**:

```bash
# Update to latest compatible version (respects ^4.21.1 constraint)
npm update express

#### Update to latest version regardless of constraint
npm install express@latest
```

### 0.5.8 Alternative Package Managers

**This tutorial uses npm (default Node.js package manager)**, but Express.js is compatible with alternative managers:

| Package Manager | Installation Command | Lock File |
|----------------|----------------------|-----------|
| npm | `npm install express` | package-lock.json |
| yarn | `yarn add express` | yarn.lock |
| pnpm | `pnpm add express` | pnpm-lock.yaml |

**Recommendation**: Stick with npm for tutorial consistency. Document alternative package managers in advanced tutorials.

### 0.5.9 Dependency Security Considerations

**Express.js Security Posture**:

- **Maintained**: Actively maintained with regular security updates
- **Community**: Large community quickly identifies and patches vulnerabilities
- **Version 4.x**: Mature, stable branch with extensive production hardening
- **Vulnerabilities**: Check https://npmjs.com/package/express for current security advisories

**Security Best Practices**:

- Run `npm audit` regularly to identify vulnerable dependencies
- Update Express.js to latest 4.x patch version for security fixes
- Subscribe to Express.js security notifications
- Review transitive dependencies for known vulnerabilities

**For Production Deployments** (beyond tutorial scope):

- Use `npm ci` instead of `npm install` for reproducible builds
- Implement dependency scanning in CI/CD pipeline
- Consider using Snyk, Dependabot, or similar tools for automated vulnerability detection

### 0.5.10 No Import/Module Changes Required

**Existing Code**: None exists; no migration required.

**New Imports in server.js**:

```javascript
const express = require('express');
```

**Module System**: CommonJS using `require()` (standard Node.js pattern).

**Alternative ES Modules Syntax** (not used in this tutorial):

```javascript
import express from 'express';
```

**Rationale for CommonJS**: Broader compatibility, simpler for beginners, no package.json "type": "module" configuration required.

### 0.5.11 Dependency Management Commands Reference

**Essential npm Commands for This Project**:

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `npm init -y` | Initialize package.json | Once at project creation |
| `npm install express` | Add Express.js dependency | Once during initial setup |
| `npm install` | Install all dependencies | After cloning repo, or when package.json changes |
| `npm list` | Show dependency tree | Debugging dependency issues |
| `npm outdated` | Check for outdated packages | Periodic maintenance |
| `npm update` | Update dependencies within constraints | Apply minor/patch updates |
| `npm audit` | Check for security vulnerabilities | Before deployment, periodic checks |
| `npm audit fix` | Automatically fix vulnerabilities | When audit reports fixable issues |

### 0.5.12 Dependency Documentation

**Express.js Documentation Resources**:

- **Official Docs**: https://expressjs.com/
- **API Reference**: https://expressjs.com/en/4x/api.html
- **Getting Started**: https://expressjs.com/en/starter/installing.html
- **GitHub Repository**: https://github.com/expressjs/express
- **npm Package**: https://www.npmjs.com/package/express

**Include in README.md**: Link to Express.js documentation for learners wanting deeper understanding.

## 0.6 Scope Boundaries and Constraints

### 0.6.1 Exhaustively In Scope

**Project Initialization Files:**

- package.json - Project metadata and dependency configuration
- .gitignore - Version control exclusion rules
- package-lock.json - Dependency version lock file (auto-generated)
- node_modules/ - Installed dependencies directory (auto-generated)

**Source Code Files:**

- server.js - Main Express.js application with server logic and route handlers
- Alternative naming: index.js if server.js not preferred (choose one, not both)

**Documentation Files:**

- README.md - Comprehensive tutorial documentation with:
  - Installation instructions
  - Usage examples
  - Testing procedures
  - Learning objectives
  - Project structure overview
  - Code explanations

**Optional Configuration:**

- .env - Environment variable configuration (optional, not required)

### 0.6.2 Implementation Tasks In Scope

**Package Management:**

- Initialize npm project with `npm init -y`
- Install Express.js ^4.21.1 as production dependency
- Verify successful installation with `npm list express`
- Document installation process in README.md

**Server Implementation:**

- Create Express.js application instance with `express()`
- Configure PORT from environment variable with fallback to 3000
- Define GET /hello route handler returning "Hello World" with text/plain Content-Type
- Define GET /evening route handler returning "Good evening" with text/plain Content-Type
- Implement optional 404 handler for undefined routes
- Start server with `app.listen(PORT, callback)` and log startup confirmation

**Code Quality:**

- Include comprehensive inline comments explaining each code section
- Follow consistent code style (indent with 2 spaces, use const/let appropriately)
- Maintain tutorial-appropriate simplicity (avoid over-engineering)
- Ensure code runs without errors on Node.js v20.19.5

**Documentation:**

- Transform README.md from placeholder to complete tutorial guide
- Include prerequisites, installation, usage, testing sections
- Provide code examples and expected outputs
- Document environment variable configuration
- Explain learning objectives and concepts taught

**Validation:**

- Manual testing of server startup
- Manual testing of /hello endpoint with browser or cURL
- Manual testing of /evening endpoint with browser or cURL
- Manual testing of 404 behavior for undefined routes
- Verification that responses have correct Content-Type headers

### 0.6.3 Explicitly Out of Scope

**Advanced Express.js Features:**

- Middleware chains (app.use() with custom middleware beyond 404 handler)
- Template engines (EJS, Pug, Handlebars) for HTML rendering
- Static file serving (express.static())
- Request body parsing for POST/PUT data
- Cookie parsing and session management
- Authentication and authorization
- CORS (Cross-Origin Resource Sharing) configuration
- Rate limiting or request throttling
- Request validation with express-validator
- Compression middleware (zlib-based)

**Additional Endpoints:**

- No POST, PUT, DELETE, or PATCH endpoints
- No parameterized routes (e.g., /users/:id)
- No query parameter handling
- No request body processing
- Only the two specified GET endpoints: /hello and /evening

**Database Integration:**

- No database connections (MongoDB, PostgreSQL, MySQL, etc.)
- No ORM/ODM (Sequelize, Mongoose, TypeORM)
- No data persistence layer
- No models or schemas
- No CRUD operations

**Testing Infrastructure:**

- No automated test suites (Jest, Mocha, Chai)
- No test coverage measurement
- No integration testing frameworks
- No end-to-end testing (Cypress, Playwright)
- No API testing tools (Supertest)
- Only manual testing with browser/cURL

**Build and Development Tools:**

- No transpilation (Babel, TypeScript compiler)
- No bundling (Webpack, Rollup, Parcel)
- No hot module reloading
- No nodemon or auto-restart tools
- No linting (ESLint, JSHint)
- No code formatting (Prettier)
- No pre-commit hooks (Husky)

**Security Features:**

- No Helmet.js security headers
- No input sanitization beyond Express.js defaults
- No SQL injection prevention (no database)
- No XSS protection beyond Express.js defaults
- No CSRF tokens
- No authentication mechanisms (JWT, OAuth, sessions)

**Deployment and Infrastructure:**

- No Docker containerization
- No Kubernetes configurations
- No CI/CD pipelines
- No cloud deployment configurations (AWS, Azure, GCP)
- No process managers (PM2, Forever)
- No clustering for multi-core utilization
- No load balancing
- No reverse proxy configuration (Nginx, Apache)

**Monitoring and Logging:**

- No structured logging libraries (Winston, Bunyan)
- No request logging middleware (Morgan)
- No error tracking (Sentry, Rollbar)
- No performance monitoring (New Relic, DataDog)
- No health check endpoints
- Only basic console.log() for startup message

**API Documentation:**

- No OpenAPI/Swagger specifications
- No API documentation generators
- No Postman collections
- Documentation only in README.md

**Version Control:**

- No Git branching strategy documentation
- No commit message conventions
- No pull request templates
- No GitHub Actions/GitLab CI configurations
- Basic .gitignore only

**Environment Management:**

- No multi-environment configurations (development, staging, production)
- No dotenv package (unless explicitly needed)
- Simple PORT environment variable only
- No configuration management systems

### 0.6.4 Technology Stack Constraints

**Frameworks Allowed:**

- Express.js 4.21.1 only
- No additional web frameworks (Koa, Fastify, Hapi)

**Language Constraints:**

- JavaScript (ES6+) only
- No TypeScript
- No JSX or template languages
- CommonJS module system (require/module.exports)

**Runtime Constraints:**

- Node.js v20.19.5 (installed version)
- No browser-based execution
- No Deno or Bun alternative runtimes

### 0.6.5 File System Constraints

**Maximum File Count**: 6-7 files total

1. package.json
2. package-lock.json
3. server.js
4. .gitignore
5. README.md
6. .env (optional)
7. node_modules/ (directory with ~50 packages)

**No Additional Directories:**

- No src/ directory (single file is sufficient)
- No lib/ or utils/ directories
- No routes/ directory (inline route definitions)
- No middleware/ directory
- No config/ directory
- No test/ directory
- No public/ or static/ directories

### 0.6.6 Performance Constraints

**Not Optimized For:**

- High traffic (thousands of requests per second)
- Concurrent connections (beyond Node.js single-thread defaults)
- Memory efficiency (no caching, connection pooling)
- Response time optimization (no performance tuning)
- Scalability (no clustering or load balancing)

**Acceptable Performance:**

- Server startup: <2 seconds
- Response time: <200ms for simple text responses
- Memory footprint: <100MB at idle

### 0.6.7 Scope Boundary Exceptions

**If User Explicitly Requests Additional Features:**

These out-of-scope items may be reconsidered if explicitly mentioned in future requirements:

- Additional endpoints beyond /hello and /evening
- Request body parsing if POST endpoints requested
- Testing framework if test creation explicitly requested
- Deployment configuration if specific platform mentioned
- Additional middleware if specific functionality requested

**Current Request Analysis:**

The user's request is strictly limited to:

1. Adding Express.js framework
2. Implementing /hello endpoint (implied from existing spec)
3. Implementing /evening endpoint (explicitly requested)

No additional features or complexity beyond these requirements should be implemented.

### 0.6.8 Educational Scope

**Target Audience:**

- Node.js beginners
- Developers new to Express.js
- Learners transitioning from vanilla Node.js to frameworks

**Learning Objectives In Scope:**

- Installing npm packages
- Importing and using Express.js
- Creating Express application instances
- Defining route handlers with app.get()
- Setting response headers and content
- Configuring server ports
- Starting HTTP servers

**Learning Objectives Out of Scope:**

- Advanced middleware patterns
- Asynchronous request handling
- Database integration
- Authentication/authorization
- Production deployment
- Performance optimization
- Security hardening

### 0.6.9 Maintenance Scope

**Version Updates In Scope:**

- Updating Express.js to latest 4.x version for security patches
- Updating npm dependencies within package.json constraints

**Maintenance Out of Scope:**

- Major version upgrades (Express.js 4.x → 5.x)
- Refactoring for new JavaScript features
- Adding features not in original specification
- Performance optimization beyond basic functionality

### 0.6.10 Documentation Scope

**Documentation In Scope:**

- README.md with installation, usage, testing instructions
- Inline code comments explaining key concepts
- Basic troubleshooting guidance
- Links to Express.js official documentation

**Documentation Out of Scope:**

- API reference documentation
- Architecture decision records
- Contributing guidelines
- Changelog or version history
- Detailed troubleshooting guides
- Video tutorials or screencasts

## 0.7 Special Instructions and Execution Parameters

### 0.7.1 User-Specified Requirements

**Original User Request (Preserved Exactly):**

> "this is a tutorial of node js server hosting one endpoint that returns the response "Hello world". Could you add expressjs into the project and add another endpoint that return the reponse of "Good evening"?"

**Key Directives Extracted:**

- **Framework Addition**: "add expressjs into the project"
- **New Endpoint**: "add another endpoint that return the reponse of 'Good evening'"
- **Preserve Existing**: Implied preservation of existing "Hello world" endpoint
- **Tutorial Context**: Project described as "tutorial" - maintain educational simplicity

### 0.7.2 Architectural Transformation Requirements

**Critical Architectural Change:**

This request represents a fundamental shift from the documented "Zero Framework Architecture" to an Express.js-based architecture. The existing technical specification (Section 3.3.1) explicitly states:

> "This project deliberately uses **no web frameworks** of any kind. This design decision is not a limitation but a core feature of the educational approach."

**Implementation Approach:**

The Blitzy platform will implement this architectural transformation while maintaining educational objectives:

- Replace vanilla Node.js `http.createServer()` with Express.js `app.listen()`
- Eliminate manual routing logic (if/else statements) in favor of Express.js route methods
- Simplify response construction using Express.js response helpers
- Maintain code clarity and tutorial-appropriate commenting
- Ensure beginners can understand the Express.js implementation

**Documentation Impact:**

Multiple technical specification sections require updates to reflect this architectural change:

- Section 3.3 Frameworks and Libraries - Remove "Zero Framework" policy, add Express.js
- Section 5.2 Component Details - Refactor component architecture for Express.js
- Section 3.4 Open Source Dependencies - Add Express.js dependency details
- Section 1.1 Executive Summary - Update project description to mention Express.js

### 0.7.3 Code Style and Formatting Guidelines

**JavaScript Style Conventions:**

- **Indentation**: 2 spaces (Express.js community standard)
- **Semicolons**: Use semicolons at end of statements (ASI-safe but explicit)
- **Quotes**: Single quotes for strings (with flexibility for "Good evening" exact match)
- **Variable Declarations**: Use `const` for constants, `let` for variables, avoid `var`
- **Function Style**: Arrow functions for route handlers: `(req, res) => {}`
- **Line Length**: Maximum 80-100 characters per line
- **Blank Lines**: One blank line between logical sections

**Example Following Style Guide:**

```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  res.type('text/plain');
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```

### 0.7.4 Exact Response Text Requirements

**Endpoint Response Specifications:**

| Endpoint | Response Text | Case Sensitivity | Trailing Whitespace |
|----------|--------------|------------------|---------------------|
| /hello | "Hello World" | Exact match required | No trailing whitespace |
| /evening | "Good evening" | Exact match required (lowercase 'e') | No trailing whitespace |

**Critical Note**: User specified "Good evening" (lowercase 'e' in evening). This must be preserved exactly, not "Good Evening" with capital E.

### 0.7.5 Environment Configuration Parameters

**PORT Environment Variable:**

- **Variable Name**: `PORT` (all uppercase)
- **Default Value**: 3000 (Express.js convention)
- **Valid Range**: 1024-65535 (unprivileged ports)
- **Usage Example**: `PORT=8080 node server.js`
- **Access Method**: `process.env.PORT`

**No Additional Environment Variables Required:**

- No database connection strings
- No API keys or secrets
- No feature flags
- No logging configuration

### 0.7.6 Server Execution Commands

**Primary Execution Methods:**

```bash
# Method 1: Direct Node.js execution
node server.js

#### Method 2: Via npm script
npm start

#### Method 3: With custom port
PORT=8080 node server.js

#### Method 4: With environment variable set separately
export PORT=8080
node server.js
```

**Non-Interactive Execution Required:**

For automation and testing, commands must complete without user input:

- No prompts for configuration
- No interactive setup wizards
- Server starts immediately upon execution
- Logs to stdout for visibility

**Stopping the Server:**

- **Ctrl+C** (SIGINT signal) - Primary method
- **kill [PID]** (SIGTERM signal) - Process termination
- **Ctrl+Z** then `kill %1` - Background job termination

### 0.7.7 Testing and Validation Procedures

**Manual Testing Protocol:**

**Test 1: Server Startup Validation**

```bash
node server.js
# Expected output: "Server listening on port 3000"
# Process should remain running (not exit)
```

**Test 2: /hello Endpoint Validation**

```bash
curl -i http://localhost:3000/hello
# Expected status: HTTP/1.1 200 OK
# Expected header: Content-Type: text/plain; charset=utf-8
# Expected body: Hello World
```

**Test 3: /evening Endpoint Validation**

```bash
curl -i http://localhost:3000/evening
# Expected status: HTTP/1.1 200 OK
# Expected header: Content-Type: text/plain; charset=utf-8
# Expected body: Good evening
```

**Test 4: 404 Behavior Validation**

```bash
curl -i http://localhost:3000/nonexistent
# Expected status: HTTP/1.1 404 Not Found
# Expected body: "Cannot GET /nonexistent" or custom 404 message
```

**Test 5: Browser-Based Validation**

- Navigate to http://localhost:3000/hello → displays "Hello World"
- Navigate to http://localhost:3000/evening → displays "Good evening"
- Navigate to http://localhost:3000/invalid → displays 404 error

### 0.7.8 Error Handling Requirements

**Startup Error Handling:**

- **Port Already in Use (EADDRINUSE)**: Express/Node.js automatically logs error and exits
- **Permission Denied (EACCES)**: Occurs if port <1024 without root; Node.js logs and exits
- **Invalid Port Number**: Caught by Node.js if PORT is non-numeric or out of range

**Runtime Error Handling:**

- **Synchronous Errors in Route Handlers**: Express.js default error handler catches and returns 500
- **404 Not Found**: Express.js automatically handles with default 404 response or custom middleware
- **Network Errors**: Connection drops handled by Node.js socket layer

**No Custom Error Pages Required**: Use Express.js defaults for simplicity.

### 0.7.9 Logging Requirements

**Startup Logging - Required:**

```javascript
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```

**Request Logging - Not Required:**

Per tutorial simplicity, do not log individual requests unless explicitly requested.

**Error Logging - Default Only:**

Express.js default error handler logs errors to console; no additional error logging needed.

### 0.7.10 Minimal Change Principle

**Preserve Simplicity:**

- Do not add features beyond user request
- Avoid over-engineering or premature optimization
- Keep code readable for beginners
- Minimize dependency count (Express.js only)
- Avoid complex abstractions or design patterns

**Examples of Unnecessary Additions to Avoid:**

- ❌ Separate route files for 2 endpoints
- ❌ Configuration management systems
- ❌ Logging frameworks
- ❌ Environment variable validation libraries
- ❌ Request validation middleware
- ❌ Database connection boilerplate "for future use"
- ❌ Abstract factory patterns or dependency injection

**Keep It Simple Principle:**

The tutorial should teach Express.js basics, not enterprise architecture patterns.

### 0.7.11 Backward Compatibility Considerations

**No Backward Compatibility Required:**

Since no implementation currently exists (only specification), there are no backward compatibility constraints.

**Future Compatibility Considerations:**

- Express.js 4.x API is stable; code should work with future 4.x releases
- Semantic versioning in package.json (`^4.21.1`) ensures compatible updates
- No deprecated Express.js APIs used

### 0.7.12 Deployment Constraints

**Local Development Only:**

This tutorial is designed for local development environment:

- Runs on localhost/127.0.0.1
- No production deployment configuration
- No SSL/TLS certificates
- No domain configuration
- No containerization

**If Deployment Needed (Out of Scope but for Reference):**

Future tutorials could cover:

- Deploying to Heroku, Render, or Railway
- Environment variable configuration on hosting platforms
- Process management with PM2
- Reverse proxy setup with Nginx

### 0.7.13 Git Workflow Considerations

**Version Control Recommendations:**

```bash
# Initialize Git repository (if not already done)
git init

#### Create .gitignore before first commit
#### (to avoid committing node_modules)

#### Initial commit after implementation
git add .
git commit -m "Add Express.js server with /hello and /evening endpoints"
```

**Recommended Commit Message Format:**

- Use present tense: "Add Express.js" not "Added Express.js"
- Be descriptive but concise
- Reference key changes in commit body if needed

### 0.7.14 Learning Progression Path

**This Implementation as Foundation:**

This Express.js tutorial serves as foundation for progressive learning:

1. **Current Level**: Basic Express.js with static text endpoints
2. **Next Level**: Add request parameters and query strings
3. **Advanced Level**: Add request body parsing for POST endpoints
4. **Expert Level**: Add database integration and authentication

**Documentation Should Reference:**

- Link to Express.js official documentation for deeper learning
- Suggest next steps for learners after completing this tutorial
- Reference more advanced Express.js tutorials

### 0.7.15 Cross-Platform Compatibility

**Operating System Support:**

- **Windows**: Should work without modifications
- **macOS**: Should work without modifications
- **Linux**: Should work without modifications

**Path Separators**: Not relevant (no file serving or path manipulation)

**Line Endings**: Configure .gitignore to normalize line endings if needed

### 0.7.16 Security Considerations

**Educational vs Production Security:**

This tutorial prioritizes learning over production security practices.

**Acceptable for Tutorial:**

- No authentication (endpoints are public)
- No input validation (no user input processed)
- No rate limiting (local development only)
- No security headers (Helmet.js not required)

**Not Acceptable Even for Tutorial:**

- Exposing actual secrets or API keys in code
- Demonstrating insecure practices as "examples"
- Using deprecated or known-vulnerable Express.js versions

**README.md Should Include Security Note:**

"This tutorial is for educational purposes. Production applications require additional security measures including authentication, input validation, rate limiting, and security headers."

### 0.7.17 Final Implementation Checklist

Before marking implementation complete, verify:

- [ ] Express.js ^4.21.1 installed and listed in package.json
- [ ] server.js created with both /hello and /evening endpoints
- [ ] /hello returns exactly "Hello World" with text/plain Content-Type
- [ ] /evening returns exactly "Good evening" with text/plain Content-Type
- [ ] Server starts without errors and logs listening message
- [ ] Both endpoints testable with cURL or browser
- [ ] 404 handler works for undefined routes
- [ ] .gitignore excludes node_modules
- [ ] README.md updated with comprehensive tutorial documentation
- [ ] Code includes educational comments explaining key concepts
- [ ] All commands use non-interactive flags where applicable
- [ ] No unnecessary dependencies or complexity added

