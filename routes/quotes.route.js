const express = require("express");
const router = express.Router();

const quoteController = require("../controllers/quote.controller");

router.get("/", quoteController.getQuotes);

module.exports = router;
