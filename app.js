require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static(`${__dirname}/public`));
app.set("view engine", "ejs");

// Home Route
app.get("/", (req, res) => {
  res.render("home");
});

// Quotes Route
const quotesRoute = require("./routes/quotes.route");
app.use("/quotes", quotesRoute);

// error 404 page
app.use((req, res) => {
  res.render("404");
});

const port = process.env.port;
app.listen(port, () => {
  console.log(`Application running on port :: ${port}`);
});
