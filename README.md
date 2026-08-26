# Smart Utility Toolkit

## Lab Assignment 1 – Web Dev III (Node.js & Express Backend)

### Unit

Unit–1

### Project Description

The **Smart Utility Toolkit** is a Node.js-based project that demonstrates the fundamentals of backend development using Node.js core modules.

This project contains multiple mini utilities including:

* CLI-based calculator
* Custom reusable modules
* Basic HTTP server
* File manager
* Random dice generator
* Colored terminal output
* Timestamp logger
* Additional calculator operations
* Dice roll history

The project uses only **Node.js built-in modules** and does not require any external npm packages or frameworks.

---

# Technologies Used

* Node.js
* JavaScript
* Terminal / Command Prompt
* Node.js Core Modules:

  * `process`
  * `http`
  * `fs`
  * `crypto`

No Express.js, third-party packages, or database are used.

---

# Project Structure

```text
smart-utility-toolkit/
│
├── calculator.js
├── app.js
├── server.js
├── fileManager.js
├── dice.js
├── test.txt
├── dice-history.txt
│
└── modules/
    ├── isEven.js
    └── logger.js
```

---

# 1. CLI Calculator

The calculator uses `process.argv` to accept input directly from the terminal.

## Supported Operations

* Addition
* Subtraction
* Multiplication
* Division
* Modulus
* Power

## How to Run

```bash
node calculator.js add 10 5
```

Example output:

```text
Result: 15
```

Other examples:

```bash
node calculator.js subtract 10 5
node calculator.js multiply 10 5
node calculator.js divide 10 5
node calculator.js mod 10 3
node calculator.js power 2 3
```

The calculator also handles invalid operations and division by zero.

---

# 2. Custom Modules

Custom modules are used to demonstrate modular and reusable programming in Node.js.

## isEven Module

The `isEven.js` module checks whether a number is even or odd.

It is exported using:

```javascript
module.exports
```

and imported into another file using:

```javascript
require()
```

## Logger Module

The `logger.js` module provides reusable logging functionality.

The logger also displays timestamps with messages.

## How to Run

```bash
node app.js
```

Example output:

```text
[DATE AND TIME] Application started
2 is Even
5 is Odd
8 is Even
11 is Odd
20 is Even
```

---

# 3. Basic HTTP Server

The HTTP server is created using Node.js's built-in `http` module.

The server runs on port:

```text
3000
```

## How to Run

```bash
node server.js
```

Open the following URLs in a browser:

```text
http://localhost:3000/
http://localhost:3000/about
http://localhost:3000/contact
```

## Routes

| Route         | Response               |
| ------------- | ---------------------- |
| `/`           | Welcome to Node Server |
| `/about`      | About Page             |
| `/contact`    | Contact Page           |
| Invalid route | 404 - Page Not Found   |

The server also displays request information in the terminal using `console.log()`.

---

# 4. File Manager

The file manager demonstrates CRUD-style file operations using Node.js's built-in `fs` module.

## Operations Used

### Create

Uses:

```javascript
fs.writeFile()
```

### Read

Uses:

```javascript
fs.readFile()
```

### Update

Uses:

```javascript
fs.appendFile()
```

### Delete

Uses:

```javascript
fs.unlink()
```

## How to Run

```bash
node fileManager.js
```

The program creates `test.txt`, reads its contents, updates the file, and finally deletes it.

It also displays success and error messages in the terminal.

---

# 5. Random Dice Generator

The dice generator uses the Node.js `crypto` module to generate random values between 1 and 6.

## How to Run

```bash
node dice.js
```

For multiple dice rolls:

```bash
node dice.js 5
```

Example:

```text
Rolling 5 dice...
Dice 1: 4
Dice 2: 2
Dice 3: 6
Dice 4: 1
Dice 5: 5
```

The random values are generated using:

```javascript
crypto.randomInt()
```

---

# Bonus Features

## 1. Colored Terminal Output

ANSI escape codes are used to display colored messages in the terminal.

This makes success and error messages easier to identify.

---

## 2. Timestamp Logger

The custom logger module displays the current date and time along with each log message.

Example:

```text
[DATE AND TIME] Application started
```

---

## 3. Additional Calculator Operations

The calculator was extended with additional operations:

* Modulus
* Power

Examples:

```bash
node calculator.js mod 10 3
```

```bash
node calculator.js power 2 3
```

---

## 4. Dice Roll History

Dice results can be stored in:

```text
dice-history.txt
```

Each roll is added to the file so previous dice results are preserved.

Example:

```text
Dice Rolled: 4
Dice Rolled: 2
Dice Rolled: 6
Dice Rolled: 1
```

This feature combines the `crypto` and `fs` modules.

---

# Execution Flow

The project demonstrates Node.js execution and asynchronous operations using console logs.

The general flow is:

```text
User Input
    ↓
Node.js Program
    ↓
Core Module
    ↓
Operation
    ↓
Console Output
```

For the file manager:

```text
Create File
    ↓
Read File
    ↓
Update File
    ↓
Read Updated File
    ↓
Delete File
```

For the HTTP server:

```text
Browser Request
       ↓
    HTTP Server
       ↓
    Check Route
       ↓
 ┌─────┼─────────┐
 ↓     ↓         ↓
 /   /about   /contact
 ↓     ↓         ↓
Response returned to browser
```

---

# Installation

No external packages are required.

Make sure Node.js is installed on your computer.

Check the installation using:

```bash
node --version
```

Then open the project folder in the terminal.

No `npm install` command is required.

---

# Running the Project

### Calculator

```bash
node calculator.js add 10 5
```

### Custom Modules

```bash
node app.js
```

### HTTP Server

```bash
node server.js
```

### File Manager

```bash
node fileManager.js
```

### Dice Generator

```bash
node dice.js
```

---

# Restrictions Followed

This project follows the assignment restrictions:

* No external npm packages
* No Express.js
* No third-party frameworks
* No database
* Only Node.js built-in modules
* Programs are executed using terminal commands

---

# Learning Outcomes

Through this project, the following Node.js concepts were practiced:

* Using `process.argv` for command-line input
* Creating reusable custom modules
* Using `module.exports`
* Using `require()`
* Creating an HTTP server
* Implementing basic routing
* Performing file operations using `fs`
* Generating random values using `crypto`
* Using loops
* Handling errors
* Using console logs for debugging and execution tracking
* Understanding asynchronous Node.js operations

---

# Conclusion

The Smart Utility Toolkit demonstrates the basic building blocks of backend development using Node.js core modules. The project combines command-line interaction, modular programming, HTTP server creation, file handling, and randomness generation into a single practical application.

The bonus features further extend the project with improved terminal output, timestamp logging, additional calculator functionality, and persistent dice-roll history.

Proof of the terminal are also provided