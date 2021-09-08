const Stats = require("../models/stats.model");

exports.updateNumberOfRequests = async (apiRequest) => {
  try {
    let stats = await Stats.findOne({ apiRequest });
    stats.totalRequest = stats.totalRequest + 1;
    await stats.save();
  } catch (error) {
    console.log(error);
  }
};

exports.getNumberOfRequests = async (apiRequest) => {
  try {
    let stats = await Stats.findOne({ apiRequest });
    return stats.totalRequest;
  } catch (error) {
    console.log(error);
  }
};
