const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
  console.log("help intent");
  res.status(200).json(req.path);
});

module.exports = router;
