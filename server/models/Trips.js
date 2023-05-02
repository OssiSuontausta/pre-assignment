const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
    departure: {
        type: String,
        required: true
    },
    return: {
        type: String,
        required: true
    },
    departureStationId: {
        type: String,
        required: true
    },
    departureStationName  : {
        type: String,
        required: true
    },
    returnStationId: {
        type: String,
        required: true
    },
    returnStationName: {
        type: String,
        required: true
    },
    coveredDistanceM: {
        type: String,
        required: true,
        min: 10
    },
    durationSec: {
        type: String,
        required: true,
        min: 10
    }
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;