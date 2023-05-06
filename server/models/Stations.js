const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  x: {
    type: String,
  },
  y: {
    type: String,
  },
});

const Station = mongoose.model("Station", stationSchema);

module.exports = Station;
