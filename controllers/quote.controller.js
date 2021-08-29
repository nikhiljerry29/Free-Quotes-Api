const Quote = require("../models/quote.model");

exports.getQuotes = (req, res) => {
  Quote.find({})
    .then((quotes) => {
      res.json(quotes);
    })
    .catch((err) => console.log(err));
};
