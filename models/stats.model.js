const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatsSchema = Schema({
  apiRequest: {
    type: String,
    required: true,
  },
  totalRequest: {
    type: Number,
    required: true,
  },
});

const Stats = mongoose.model("stats", StatsSchema);
module.exports = Stats;
