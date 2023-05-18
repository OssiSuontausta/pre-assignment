const express = require("express");
const router = express.Router();
const {getTrips, getDepartingTrips, getReturningTrips} = require("../controllers/tripController.js");

router.get("/", getTrips);

router.get("/departureStation", getDepartingTrips);

router.get("/returnStation", getReturningTrips);

module.exports = router;