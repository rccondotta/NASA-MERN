# NASA-MERN
Full stack MERN Project

## Getting Started

1. Ensure you have Node.js installed.
2. Create a free [Mongo Atlas](https://www.mongodb.com/atlas/database) database online or start a local MongoDB database.
3. Create a `server/.env` file with a `MONGO_URL` property set to your MongoDB connection string.
4. In the terminal, run: `npm install`

## Running the Project

1. In the terminal, run: `npm run deploy`
2. Browse to the mission control frontend at [localhost:8000](http://localhost:8000) and schedule an interstellar launch!

## Docker

1. Ensure you have the latest version of Docker installed
2. Run `docker build -t nasa-project .`
3. Run `docker run -it -p 8000:8000 nasa-project`

## Running the Tests

To run any automated tests, run `npm test`. This will: 
* Run all the client-side tests: `npm test --prefix client`
* Run all the server-side tests: `npm test --prefix server` 

## Packages Used

* Concurrently - Run process concurrently for windows
* Axios - Promise based HTTP client for the browser and node.js
* Cors - Providing a Connect/Express middleware that can be used to enable CORS with various options.
* csv-parse
* dotenv - Loads environment variables from a .env file into process.env
* express - Fast, unopinionated, minimalist web framework for Node.js.
* mongoose - MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports Node.js and Deno (alpha).
* morgan - HTTP request logger middleware for node.js
* pm2 - Production process manager for Node.js applications with a built-in load balance
* jest (devDependency) - Delightful JavaScript Testing.
* nodemon (devDependency) - Simple monitor script for use during development of a Node.js app.
* supertest (devDependency) - SuperAgent driven library for testing HTTP servers

## Concepts

* Model, View, Controller
* Middleware
* Testing APIs
* Improving Node Performance
* Databases
* Working with REST APIs (SpaceX Project)
* Continous Integration and Delivery (Github Actions)
* Production and the Cloud (Docker + AWS)

