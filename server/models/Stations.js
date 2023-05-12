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
    type: Number,
  },
  y: {
    type: Number,
  },
});

const Station = mongoose.model("Station", stationSchema);

module.exports = Station;
