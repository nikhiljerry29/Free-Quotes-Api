require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(`${__dirname}/public`));
app.set("view engine", "ejs");

// Home Route
app.get("/", (req, res) => {
  res.render("home");
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
  console.log(`Application running on port :: ${port}`);
});
