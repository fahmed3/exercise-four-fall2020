//Show one blogpost
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.send("A Blog post"));

module.exports = router;
