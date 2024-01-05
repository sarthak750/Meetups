const express = require("express");
const app = express();
const mongoose = require("mongoose");
const meetups = require("./routes/meetups");
require("dotenv").config();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.use("/api/v1/meetups", meetups);

const start = async () => {
  try {
    await mongoose.connect(process.env.Mongo_Url);
    app.listen(5000, console.log("Listening on port 5000..."));
  } catch (error) {
    console.log(error);
  }
};

start();
