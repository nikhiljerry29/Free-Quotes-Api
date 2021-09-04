const Quote = require("../models/quote.model");

exports.getQuotes = async (req, res) => {
  try {
    let quotes = await Quote.find({});
    res.json(quotes);
  } catch (err) {
    console.log(err);
  }
};

const randomQuote = require("../util/random-quote.util");

exports.getRandomQuote = async (req, res) => {
  let quote = await randomQuote();
  res.json(quote);
};

exports.postQuotes = async (req, res) => {
  try {
    const quote = req.body.quote;
    const author = req.body.author;

    const newQuote = new Quote({
      quote,
      author,
    });

    await newQuote.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
