const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  departureStationName: {
    type: String,
  },
  returnStationName: {
    type: String,
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
