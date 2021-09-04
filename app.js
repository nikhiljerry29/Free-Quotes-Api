require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(`${__dirname}/public`));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js")); // redirect bootstrap JS
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist")); // redirect JS jQuery
app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist/css")
); // redirect CSS bootstrap
app.set("view engine", "ejs");

// Home Route
const randomQuote = require("./util/random-quote.util");
app.get("/", async (req, res) => {
  res.render("home", {
    randomQuote: await randomQuote(),
  });
});

// Quotes Route
const quotesRoute = require("./routes/quotes.route");
app.use("/api", quotesRoute);

// error 404 page
app.use((req, res) => {
  res.status(404).render("404");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.warn(`Application running on port :: ${port}`);
});
