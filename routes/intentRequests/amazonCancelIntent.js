const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
  console.log("cancel intent");
  res.status(200).json(req.path);
});

module.exports = router;
