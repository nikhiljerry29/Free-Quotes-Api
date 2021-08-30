const Quote = require("../models/quote.model");

exports.getQuotes = (req, res) => {
  Quote.find()
    .then((quotes) => {
      res.json(quotes);
    })
    .catch((err) => console.log(err));
};

exports.getRandomQuote = (req, res) => {
  Quote.count()
    .then((totalRecord) => {
      let random = Math.floor(Math.random() * totalRecord);

      Quote.findOne()
        .skip(random)
        .then((quote) => {
          res.json(quote);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

exports.postQuotes = (req, res) => {
  
}