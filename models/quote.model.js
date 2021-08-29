const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuoteSchema = Schema({
  quote: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

const Quote = mongoose.model("quote", QuoteSchema);
module.exports = Quote;
