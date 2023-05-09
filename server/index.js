const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Trip = require("./models/Trips.js");

const stationRoutes = require("./routes/stations.js");
const tripRoutes = require("./routes/trips.js");

const databaseImportTrips = require("./db_imports/importTrips.js");
const databaseImportStations = require("./db_imports/importStations.js");

const csvImportedFlagKey = "csvImported";

//Initiate app
const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/api/trips", tripRoutes);
app.use("/api/stations", stationRoutes);

//Connect to db
require("dotenv").config();
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
  process.exit(1);
});

//Check if csv files are imported already
db.once("open", async () => {
  try {
    const tripsCollection = db.collection("trips");
    const imported = await tripsCollection.findOne({ [csvImportedFlagKey]: { $exists: true } });
    if (imported && imported[csvImportedFlagKey]) {
      await Trip.createIndexes();
      console.log("CSV files alreaddy imported, skipping import!");
    }else {
      await databaseImportStations(), databaseImportTrips();
      tripsCollection.updateOne({}, { $set: { [csvImportedFlagKey]: true } }, { upsert: true });
      await Trip.createIndexes();
    }
    console.log("Server started and ready!");
    
  }catch (err) {
    console.log(err);
    process.exit(1);
  }
});

//Port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
