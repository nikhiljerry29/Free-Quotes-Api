const Quote = require("../models/quote.model");

const randomQuote = require("../util/random-quote.util");
const { updateNumberOfRequests } = require("../util/stats-count.util");

exports.getQuotes = async (req, res) => {
  try {
    await updateNumberOfRequests("All Quotes");

    let quotes = await Quote.find({});
    res.json(quotes);
  } catch (err) {
    console.log(err);
  }
};

exports.getRandomQuote = async (req, res) => {
  try {
    await updateNumberOfRequests("Random Quote");

    let quote = await randomQuote();
    res.json(quote);
  } catch (error) {
    console.log(error);
  }
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
