const randomQuote = require("../util/random-quote.util");
const { getNumberOfRequests } = require("../util/stats-count.util");

exports.getHome = async (req, res) => {
  res.render("home", {
    randomQuote: await randomQuote(),
    requestStats: {
      allQuotesReqs: await getNumberOfRequests("All Quotes"),
      randomQuoteReqs: await getNumberOfRequests("Random Quote"),
    },
  });
};
