const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a Name"],
      trim: true,
      lowerCase: true,
      minlength: 4,
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Please add an Email"],
      lowerCase: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please Provide an email",
      ],
      unique: true,
    },
    password: {
      type: String,
      required: true["Please add a password"],
      minLength: 6,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
