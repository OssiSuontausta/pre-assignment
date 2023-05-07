const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const stationRoutes = require("./routes/stations.js");
const tripRoutes = require("./routes/trips.js");

//const databaseImportTrips = require("./db_imports/importTrips.js");
//const databaseImportStations = require("./db_imports/importStations.js");

const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/trips", tripRoutes);

app.use("/api/stations", stationRoutes);

/**** ONLY CALL THESE IF YOU NEED TO IMPORT CSV FILES TO AN EMPTY DATABASE! **********/

//databaseImportTrips();
//databaseImportStations();

/*********************************************************************************** */

require("dotenv").config();
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
