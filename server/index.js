const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const databaseImportTrips = require("./db_imports/importTrips.js");
//const databaseImportStations = require("./db_imports/importStations.js");

/**** ONLY CALL THESE IF YOU NEED TO IMPORT CSV FILES TO AN EMPTY DATABASE! **********/
//databaseImportTrips();
//databaseImportStations();

const app = express();
app.use(express.json());
app.use(cors());

require("dotenv").config();
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error: "));
connection.once("open", () => {
  console.log("Connected to database!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
