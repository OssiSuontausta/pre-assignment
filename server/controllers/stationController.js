const Station = require("../models/Stations.js");
const mongoose = require("mongoose");

const getStations = async (req, res) => {

  try {
    const stations = await Station
      .find({})
      .sort({name: 1});
    res.status(200).json(stations);
  }catch (err) {
    res.status(404).json({error: err.message});
  }
};

const getOneStation = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid) {
    return res.status(404).json({error: "No station found"});
  }

  try {
    const station = await Station.findById(id);
    res.status(200).json(station);
  }catch (err) {
    res.status(404).json({error: err.message});
  }
};

module.exports = {
  getStations,
  getOneStation
};