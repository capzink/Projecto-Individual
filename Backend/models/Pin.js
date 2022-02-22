const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a Name"],
      trim: true,
      lowerCase: true,
      minlength: 4,
    },
    title: {
      type: String,
      required: [true, "Please add a Tittle"],
      min: 3,
      max: 10,
    },
    desc: {
      type: String,
      min: 3,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    long: {
      type: Number,
      required: [true, "Please add a Longitude"],
    },
    lat: {
      type: Number,
      required: [true, "Please add a Latitude"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pin", PinSchema);
