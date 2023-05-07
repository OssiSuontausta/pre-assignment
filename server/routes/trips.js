const express = require("express");
const router = express.Router();
const {getTrips} = require("../controllers/tripController.js");

router.get("/", getTrips);

module.exports = router;