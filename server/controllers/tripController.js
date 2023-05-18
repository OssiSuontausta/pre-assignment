const Trip = require("../models/Trips.js");

const getTrips = async (req, res) => {

  const page = req.query.page || 0;
  const itemsPerPage = 10;

  try {
    const totalRows = await Trip.estimatedDocumentCount();
    const trips = await Trip
      .find({returnStationName: {$exists: true}})
      .skip(page * itemsPerPage)
      .limit(itemsPerPage);
    res.status(200).json([trips, totalRows]);
  }catch (err) {
    res.status(404).json({error: err.message});
  }
};

module.exports = {
  getTrips
};