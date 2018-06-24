// Handler(s) for launch requests will go here
const express = require('express');
const AlexaMessageBuilder = require('alexa-message-builder');

const router = express.Router();

// Response Messages
const launchReqPrompt = "<speak>Welcome to Alexa's Self Care! What would you like to do?</speak>";
const launchReqReprompt = "<speak>Is there anything I can help you with?</speak>";

router.use((req, res, next) => {
  console.log("launch request");

  // Build Alexa speech message
  const message = new AlexaMessageBuilder()
                      .addSSML(launchReqPrompt)
                      .addRepromptSSML(launchReqReprompt)
                      .keepSession()
                      .get();
  console.log(message);
  res.status(200).json(message);
});

module.exports = router;
