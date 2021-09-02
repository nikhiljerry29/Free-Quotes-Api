const express = require("express");
const router = express.Router();

const quoteController = require("../controllers/quote.controller");

router.get("/quotes", quoteController.getQuotes);
router.post("/quotes", quoteController.postQuotes);

router.get("/random", quoteController.getRandomQuote);

module.exports = router;
