const express = require("express");
const router = express.Router();

const Quote = require("../models/quote.model");

router.get("/", (req, res) => {
  Quote.find({})
    .then((quotes) => {
      res.json(quotes);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
