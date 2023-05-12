const express = require('express');

const { httpGetAllPlanets } = require('./planets.controllers');

// Define a new router
const planetsRouter = express.Router();

// Define the routes
planetsRouter.get('/', httpGetAllPlanets);

module.exports = planetsRouter;