# SIT725 Task 4.2P – TasteTrail Recipe Explorer

## Description

TasteTrail is a Node.js, Express, MongoDB and Materialize CSS application created for SIT725 Task 4.2P.

The application retrieves persistent recipe records from MongoDB through an Express GET endpoint and dynamically displays them as Materialize recipe cards.

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- HTML
- CSS
- Vanilla JavaScript
- Materialize CSS

## Project Structure

```text
4.2P
├── models
│   └── recipeModel.js
├── public
│   ├── css
│   ├── images
│   ├── js
│   └── index.html
├── seed.js
├── server.js
├── package.json
└── README.md
```

## Requirements

- Node.js
- npm
- MongoDB Community Server

## Installation

Open the `4.2P` folder and install the dependencies:

```bash
npm install
```

## Seed the Database

Make sure MongoDB is running, then run:

```bash
npm run seed
```

This inserts the sample TasteTrail recipe documents into the local MongoDB database.

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

The endpoint retrieves recipe records from MongoDB and returns them as JSON.

## Database

```text
Database: tastetrailDB
Collection: recipes
```

## Author

Kasun Wimalasuriya  
Student ID: S225450739