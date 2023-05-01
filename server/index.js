const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connected to database!");
});

app.listen(3001, () => {
    console.log("Server running on port 3001!");
});