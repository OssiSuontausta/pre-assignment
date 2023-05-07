const express = require("express");
const router = express.Router();
const {getStations, getOneStation} = require("../controllers/stationController.js");

router.get("/", getStations);

router.get("/:id", getOneStation);

module.exports = router;