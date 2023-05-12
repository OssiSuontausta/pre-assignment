const fs = require("fs");
const csv = require("csv-parser");

const Trip = require("../models/Trips.js");

/*INITIAL JOURNEY DATA IMPORT*******************************************************************/

const databaseImportTrips = async () => {
  const csvFiles = ["./2021-05.csv", "./2021-06.csv", "./2021-07.csv"];

  for (const filename of csvFiles) {
    let times = 1;
    let dataArray = [];

    const readStream = fs.createReadStream(filename).pipe(
      csv({
        headers: [
          "departure",
          "return",
          "departureStationId",
          "departureStationName",
          "returnStationId",
          "returnStationName",
          "coveredDistanceM",
          "durationSec",
        ],
        skipLines: 1,
        separator: ",",
        strict: false,
      })
    );
    console.log(`Processing started for ${filename}`);
    for await (const row of readStream) {
      if (row.coveredDistanceM < 10 || row.durationSec < 10) {
        continue;
      }
      if (isNaN(row.coveredDistanceM) || isNaN(row.durationSec)) {
        continue;
      }

      const data = new Trip({
        departureStationName: row.departureStationName.trim(),
        returnStationName: row.returnStationName.trim(),
        coveredDistanceM: parseInt(row.coveredDistanceM),
        durationSec: parseInt(row.durationSec),
      });
    
      dataArray.push(data);

      if (dataArray.length === 500000) {
        console.log(`500000 reached ${times} times, processing...`);
        try {
          await Trip.insertMany(dataArray);
          console.log(`500000 inserted ${times} times, processing...`);
          times++;
          dataArray = [];
        } catch (err) {
          console.error(err);
        }
      }
    }

    if (dataArray.length > 0) {
      console.log(`${dataArray.length} rows remaining, processing...`);
      try {
        await Trip.insertMany(dataArray);
        console.log("Remaining rows inserted...processing...");
        console.log(`${filename} successfully processed!`);
      } catch (err) {
        console.error(err);
      }
    }
  }
};

module.exports = databaseImportTrips;
