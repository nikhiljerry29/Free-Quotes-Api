const express = require("express");
const router = express.Router();

const quoteController = require("../controllers/quote.controller");

router.get("/quotes", quoteController.getQuotes);

router.get("/random", quoteController.getRandomQuote);

module.exports = router;
