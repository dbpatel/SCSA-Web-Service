const express = require('express');
const AlexaMessageBuilder = require('alexa-message-builder');

const router = express.Router();

// Response Messages
const helpReqPrompt = "<speak>You can ask me to retrieve or record readings for blood pressure, heart rate, weight, height and blood glucose. Let me know what you'd like to do.</speak>";
const helpReqReprompt = "<speak></speak>";

router.use((req, res, next) => {
  console.log("help intent");

  // Build Alexa speech message
  const message = new AlexaMessageBuilder()
                      .addSSML(helpReqPrompt)
                      .addRepromptSSML(helpReqReprompt)
                      .keepSession()
                      .get();
  console.log(message);
  res.status(200).json(message);
});

module.exports = router;
