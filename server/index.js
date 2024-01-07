const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const meetups = require("./routes/meetups");
const favoriteMeetups = require("./routes/favoriteMeetups");
require("dotenv").config();

app.use(cors());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(express.json());

app.use("/api/v1/meetups", meetups);
app.use("/api/v1/favoriteMeetups", favoriteMeetups);

const start = async () => {
  try {
    await mongoose.connect(process.env.Mongo_Url);
    app.listen(5000, console.log("Listening on port 5000..."));
  } catch (error) {
    console.log(error);
  }
};

start();
