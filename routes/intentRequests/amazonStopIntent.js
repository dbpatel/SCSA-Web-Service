const express = require('express');
const AlexaMessageBuilder = require('alexa-message-builder');

const router = express.Router();

// Response Messages
const stopIntentSpeech = "<speak>Someone woke up on the grumpy side of the bed. Just let me know if you need anything!</speak>";

router.use((req, res, next) => {
  console.log("stop intent");

  // Build Alexa speech message
  const message = new AlexaMessageBuilder()
                      .addSSML(stopIntentSpeech)
                      .get();
  console.log(message);
  res.status(200).json(message);
});

module.exports = router;
