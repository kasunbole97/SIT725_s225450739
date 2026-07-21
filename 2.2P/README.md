# SIT725 Task 2.2P – Express Web Server

## Description

This project is a simple Node.js and Express application created for SIT725 Task 2.2P.

The application serves a webpage from the `public` folder and provides GET endpoints, including a web service that adds two numbers on the server.

## Requirements

- Node.js
- npm

## Installation

Clone the repository and open the `2.2P` folder.

Install the required dependencies:

```bash
npm install
```

## Run the Application

Start the Express server:

```bash
npm start
```

The server will run at:

```
http://localhost:3000
```

## Available Endpoints

### Home Page

```
http://localhost:3000
```

### Simple GET Endpoint

```
http://localhost:3000/hello
```

### Addition Web Service

```
http://localhost:3000/add?num1=5&num2=3
```

Example response:

```json
{
  "num1": 5,
  "num2": 3,
  "result": 8
}
```

## Author

Kasun Wimalasuriya