# SIT725 Task 3.2P – TasteTrail Recipe Explorer

## Description

TasteTrail is a small Express and Materialize CSS web application created for SIT725 Task 3.2P.

The application requests recipe data from an Express GET REST endpoint and dynamically displays the returned data as Materialize recipe cards.

## Technologies

- Node.js
- Express
- HTML
- CSS
- Vanilla JavaScript
- Materialize CSS

## Project Structure

```text
3.2P
├── public
│   ├── css
│   ├── images
│   ├── js
│   └── index.html
├── server.js
├── package.json
└── README.md
```

## Installation

Open the `3.2P` folder and install the dependencies:

```bash
npm install
```

## Run the Application

```bash
npm start
```

Open:

```text
http://localhost:3000
```

## REST Endpoint

```text
GET http://localhost:3000/api/recipes
```

The endpoint returns recipe information as JSON.

## Author

Kasun Wimalasuriya  
Student ID: S225450739