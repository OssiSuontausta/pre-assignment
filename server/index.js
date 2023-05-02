const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const csv = require("csv-parser");

const Trip = require("./models/trips");

const app = express();
app.use(express.json());
app.use(cors());

require("dotenv").config();
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connected to database!");
});

/*INITIAL DATA IMPORT*******************************************************************/

/*const csvFiles = ["../2021-05.csv", "../2021-06.csv", "../2021-07.csv"];
csvFiles.forEach((filename) => {
  let dataArray = [];

  fs.createReadStream(`${filename}`)
    .pipe(csv({ headers: ["departure", "return", "departureStationId", "departureStationName", "returnStationId", "returnStationName", "coveredDistanceM", "durationSec"] }))
    .on('data', (row) => {
      // Filter out rows with distance less than 10 or duration less than 10
      if (row.coveredDistanceM < 10 || row.durationSec < 10) {
        return;
      }

      // Create a new instance of your model using the modified row data
      const data = new Trip({
        departure: row.departure,
        return: row.return,
        departureStationId: row.departureStationId,
        departureStationName: row.departureStationName,
        returnStationId: row.returnStationId,
        returnStationName: row.returnStationName,
        coveredDistanceM: row.coveredDistanceM,
        durationSec: row.durationSec
      });

      // Store the data in an array
      dataArray.push(data);

      // If the batch size is reached, insert the data into MongoDB
      if (dataArray.length === 10000) {
        Trip.insertMany(dataArray)
            .then(() => dataArray = [])
            .catch(err => console.log(err))
      }
    })
    .on('end', () => {
      // Insert any remaining data into MongoDB
      if (dataArray.length > 0) {
        Trip.insertMany(dataArray)
            .catch(err => console.log(err))
      }

      console.log(`${filename} successfully processed`);
    });
});*/

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}!`);
});