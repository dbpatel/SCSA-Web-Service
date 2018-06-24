// Router to route incoming requests according to request type
const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
  // Update request path and url to enable easier routing
  req.path = "/" + req.body.request.type;
  req.url = "/" + req.body.request.type;
  next();
});

module.exports = router;
