const Quote = require("../models/quote.model");

randomQuote = async () => {
  try {
    let totalRecord = await Quote.count();
    let random = Math.floor(Math.random() * totalRecord);
    let quote = await Quote.findOne().skip(random);

    return quote;
  } catch (error) {
    console.log(error);
  }
};

module.exports = randomQuote;
