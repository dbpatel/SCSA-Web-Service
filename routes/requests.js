// Router to route incoming requests according to request type
const express = require('express');

const router = express.Router();

// Import Internal Routes
const launchRequestRoutes = require('./launchRequests');
const sessionEndedRequestRoutes = require('./sessionEndedRequests');
const intentRequestRoutes = require('./intentRequests');

router.use((req, res, next) => {
  // Update request path and url to enable easier routing
  req.path = "/" + req.body.request.type;
  req.url = "/" + req.body.request.type;
  next();
});

// Routes for different request types
router.use('/LaunchRequest', launchRequestRoutes);
router.use('/SessionEndedRequest', sessionEndedRequestRoutes);
router.use('/IntentRequest', intentRequestRoutes);

module.exports = router;
