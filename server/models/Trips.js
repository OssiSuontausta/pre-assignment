const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
    departure: {
        type: Date,
        required: true
    },
    return: {
        type: Date,
        required: true
    },
    departure_station_id: {
        type: Number,
        required: true
    },
    departure_station_name: {
        type: String,
        required: true
    },
    return_station_id: {
        type: Number,
        required: true
    },
    return_station_name: {
        type: String,
        required: true
    },
    covered_distance_m: {
        type: Number,
        required: true
    },
    duration_sec: {
        type: Number,
        required: true
    }
});

const TripModel = mongoose.model("trips", TripSchema);

module.exports = TripModel;