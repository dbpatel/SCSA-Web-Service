// Handler(s) for intent requests will go here
const express = require('express');

const router = express.Router();

// Import sub-routes
const amazonHelpIntentRoutes = require('./intentRequests/amazonHelpIntent');
const amazonCancelIntentRoutes = require('./intentRequests/amazonCancelIntent');
const amazonStopIntentRoutes = require('./intentRequests/amazonStopIntent');

// Update url and path for specific type of intent received
router.use((req, res, next) => {
  console.log("intent request");
  // Updating request path from here onwards
  req.path = "/" + req.body.request.intent.name;
  req.url = "/" + req.body.request.intent.name;
  next();
});

router.use('/AMAZON.HelpIntent', amazonHelpIntentRoutes);
router.use('/AMAZON.CancelIntent', amazonCancelIntentRoutes);
router.use('/AMAZON.StopIntent', amazonStopIntentRoutes);

module.exports = router;
