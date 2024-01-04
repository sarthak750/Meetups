const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const MeetupSchema = new Schema({
  title: {
    type: String,
    required: [true, "Must Provide Title"],
    trim: true,
    maxlength: [20, "Title can't be more than 20 characters"],
  },
  image_url: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: [true, "Must Provide Address"],
  },
  description: {
    type: String,
    required: [true, "Must Provide Description"],
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Meetup", MeetupSchema);
