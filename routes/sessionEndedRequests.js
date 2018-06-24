// Handler(s) for session ended requests will go here
const express = require('express');
const AlexaMessageBuilder = require('alexa-message-builder');

const router = express.Router();

// Response Messages
const sessionEndedPrompt = "<speak></speak>";

router.use((req, res, next) => {
  console.log("session ended request");

  // Build Alexa speech message
  const message = new AlexaMessageBuilder()
                      .addSSML(sessionEndedPrompt)
                      .get();
  console.log(message);
  res.status(200).json(message);
});

module.exports = router;
