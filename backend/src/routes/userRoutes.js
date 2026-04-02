const express = require("express");
const users = require("../database/fakeDB");

const router = express.Router();

router.get("/user/:id", (req, res) => {
  const user = users[req.params.id];

  res.json({
    premium: user?.premium || false,
  });
});

module.exports = router;