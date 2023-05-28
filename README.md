# Helsinki city bike app

This is a Full-stack (MERN) city bike app, inspired by Solita dev academy pre-assignment. 
You can check out the assignment here: [Pre-assignment](https://github.com/solita/dev-academy-2023-exercise "Pre-assignment")

(Due to time constraints I had to prioritise heavily and some technologies and features are not implemented, you can read more about that on "Todo" -section)

This app uses a dataset that has information about Helsinki Region Transport’s (HSL) city bicycle stations.
* Dataset: <https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv>
* License and information: <https://www.avoindata.fi/data/en/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902>

The app also uses three datasets of journey data, that are owned by City Bike Finland:
* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv>
* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv>
* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv>

## Features

* Stations view
    * All stations listed
    * Stations name
    * Address
    * City
* Stations view can be sorted by columns
* Clicking on a station will open up the single station view, which shows information for that station: 
    * Stations name
    * Address
    * Total number of trips departing from the station
    * Total number of trips returning to the station
    * Button to open the stations location on a map
* Trips view
    * Lists all the trips that have duration of at least 10 seconds and distance of at least 10 meters
    * Departing station for each trip
    * Return station for each trip
    * Distance of each trip in meters
    * Duration of each trip in seconds
* Can be run in Docker
* A few simple unit tests for front-end
* Responsive website

## Technologies used

* Front-end
    * JavaScript, React, Material UI
* Back-end 
    * JavaScript, Node.js (express, mongoose), MongoDB
* Docker 

## Setup and prerequisites

There are two ways to run the app, with or without Docker. Both ways need these first steps to work so do not skip this part!

1. Clone this repository on your machine.

2. Download the 3 datasets for journeys: 
* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv>
* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv>
* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv>

Make sure the filenames stay as 2021-05, 2021-06 and 2021-07 and that they are in .csv format so that the files will be imported to database correctly!

3. (Optional) This repository already includes the station dataset as "asemat.csv" on "server" directory, but if for some reason you need to download it you can do it here:
* Dataset: <https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv>

Make sure to rename the file to "asemat.csv" if you don't use the file included, and make sure there is only one file with the same name!

4. Open the cloned repository on your machine, navigate to "server" directory and copy or move the downloaded dataset files in that directory.

### Docker setup

To run the app on Docker:

1. You need to have `Docker` installed and ready on you machine. You can download and install Docker from <https://www.docker.com/>

2. Open your terminal and navigate to the root (pre-assignment folder) of the cloned repository

3. In your terminal, give the following command: `docker build -t "react-app" ./client/` to build the frontend image. Wait a moment until it is done.

4. Next give command: `docker build -t "api-server" ./server/` to build the backend image. Wait until it is done.

5. Then give command: `docker-compose up` to start the containers. This will take a few minutes as the data is imported and processed for the database.

6. After you see the text `"./2021-07.csv succesfully processed!"` on your terminal, everything is running correctly and the app is ready to use.

7. Open your browser and navigate to `localhost:3000` to start using the app!

### Setup without Docker

1. You need to have `Node.js` installed on your machine. You can download it here: <https://nodejs.org/en>

2. You also need to have `MongoDB` installed. Donwload and install from here: <https://www.mongodb.com/try/download/community>

3. In terminal, navigate to "server" directory and give command `npm install` to install dependencies for the backend.

4. Navigate to "client" directory and give command `npm install` to install dependencies for the frontend.

5. In the server directory, create a file called `".env"` and in that file type: MONGODB_URI = mongodb://localhost:27017/citybike_db

6. Navigate to "server" directory and run the server with command `npm start` . On first launch this will import the datasets to database so it will take a few minutes to be ready.

7. After you see the text `"./2021-07.csv succesfully processed!"` on your terminal, everything is running correctly and the back-end is ready to use.

8. Navigate to "client" directory and type `npm start` to start the front-end.

9. Open your browser, go to `localhost:3000` and start using the app!

## Running tests

Due to time constraints, I have only implemented a few simple unit tests on the front-end. 

To run tests, navigate to "client" directory and give command `npm test` to run the tests.

## API Endpoint Routes

### Stations

- GET       /api/stations       - Get all stations
- GET       /api/stations/{id}  - Get station by id

### Trips

- GET       /api/trips                      - Get all trips
- GET       /api/trips/returnStation        - Get number of trips that ended in certain station
- GET       /api/trips/departureStation     - Get number of trips that departed from a certain station

## TODO

Due to time constraints I was not able to implement all the features that I wanted. This was my first real Full-stack app that I have made so overall I am quite happy with the outcome.

I also decided to not use TypeScript, even though I know it and could have used it, just to save some time.

Some "bugs" I noticed: 

- The trips duration was supposed to be in minutes, and the distance in kilometers, but I decided to not fix it after I noticed that condition too late in the instructions and decided to spent the remaining time on this documentation.
- Importing data to MongoDB database was new to me, and I decided to heavily leave out some information because the datasets were so large, but this left out some useful data
- Some of the stations do not display number of trips correctly

Some other features I would have liked to add but did not have time: 

- Back-end tests and overall better tests, E2E tests
- POST routes to insert new trips and possibly stations
- Forms to front-end for posting new trips and stations
- Single station view is a bit empty and not so pretty, would have liked to clean it up if I had more time
