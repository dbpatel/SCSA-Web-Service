const express = require('express');
const AlexaMessageBuilder = require('alexa-message-builder');

const router = express.Router();

// Response Messages
const cancelIntentSpeech = "<speak>\<prosody rate=\"fast\">Nice talking<\/prosody\> \<prosody rate=\"fast\" pitch=\"+15%\"\>to you!\<\/prosody\> I'll see you later, aligator</speak>";

router.use((req, res, next) => {
  console.log("cancel intent");

  // Build Alexa speech message
  const message = new AlexaMessageBuilder()
                      .addSSML(cancelIntentSpeech)
                      .get();
  console.log(message);
  res.status(200).json(message);
});

module.exports = router;
