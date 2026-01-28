// routes/index.js

const express = require("express");
const router = express.Router();

// test route
router.get("/", (req, res) => {
  res.json({
    message: "Backend routes working fine ✅"
  });
});

module.exports = router;
