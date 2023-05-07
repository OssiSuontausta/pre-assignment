const fs = require("fs");
const csv = require("csv-parser");

const Station = require("../models/Stations.js");

/*INITIAL STATION DATA IMPORT*******************************************************************/

const databaseImportStations = async () => {
  const csvFiles = ["./asemat.csv"];

  for (const filename of csvFiles) {
    let times = 1;
    let dataArray = [];

    const readStream = fs.createReadStream(filename).pipe(
      csv({
        headers: [
          "FID",
          "ID",
          "nameFIN",
          "nameSWE",
          "nameENG",
          "addressFIN",
          "addressSWE",
          "cityFIN",
          "citySWE",
          "opreator",
          "capacity",
          "x",
          "y",
        ],
        skipLines: 1,
        separator: ",",
        strict: false,
        quote: "",
      })
    );
    console.log(`Processing started for ${filename}`);
    for await (const row of readStream) {
      if (!isValidRow(row)) {
        continue;
      }

      const data = new Station({
        name: row.nameFIN.trim(),
        address: row.addressFIN.trim(),
        city: row.cityFIN.trim(),
        x: row.x,
        y: row.y,
      });

      dataArray.push(data);

      if (dataArray.length === 500000) {
        console.log(`500000 reached ${times} times`);
        try {
          await Station.insertMany(dataArray);
          console.log(`500000 inserted ${times} times`);
          console.log(process.memoryUsage());
          times++;
          dataArray = [];
        } catch (err) {
          console.error(err);
        }
      }
    }

    if (dataArray.length > 0) {
      console.log(`${dataArray.length} rows remaining...`);
      try {
        await Station.insertMany(dataArray);
        console.log("Remaining row inserted");
        console.log(dataArray.length);
        console.log(`${filename} successfully processed`);
      } catch (err) {
        console.error(err);
      }
    }
  }
};
const isValidRow = (row) => {
  return row.nameFIN && row.addressFIN && row.cityFIN && row.x && row.y;
};

module.exports = databaseImportStations;