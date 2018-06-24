const express = require('express');
const morganLogger = require('morgan'); // TODO: implement proper logging using this or something else
const bodyParser = require('body-parser');

// Execute express to use its features
const app = express();

// Import Internal Routes
const requestRoutes = require('./routes/requests');
const launchRequestRoutes = require('./routes/launchRequests');
const sessionEndedRequestRoutes = require('./routes/sessionEndedRequests');
const intentRequestRoutes = require('./routes/intentRequests');

// Pass request to logger middleware
app.use(morganLogger('dev')); // TODO: proper logging configurations and use

// Parse the incoming request body and make it available under req.body
app.use(bodyParser.urlencoded({ extended: false })); // see body-parser documentation
app.use(bodyParser.json());

// Route for all incoming requsts
app.use(requestRoutes);

// Routes for different request types
app.use('/LaunchRequest', launchRequestRoutes);
app.use('/SessionEndedRequest', sessionEndedRequestRoutes);
app.use('/IntentRequest', intentRequestRoutes);


// Error Handler for Requests that don't match any routes

// Error Handlers for all errors thrown


// Explore Express app
module.exports = app;
