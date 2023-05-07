const Trip = require("../models/Trips.js");

const getTrips = async (req, res) => {

  try {
    const trips = await Trip.find({});
    res.status(200).json(trips);
  }catch (err) {
    res.status(404).json({error: err.message});
  }
};

module.exports = {
  getTrips
};