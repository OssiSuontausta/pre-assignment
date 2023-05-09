const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  departureStationName: {
    type: String,
    index: true
  },
  returnStationName: {
    type: String,
    index: true
  },
  coveredDistanceM: {
    type: Number,
  },
  durationSec: {
    type: Number,
  },
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
