const mongoose = require("mongoose");
const client = require("../config/connect");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
    },
    phone_no: {
      type: String,
    },
    address_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
    profile_img: {
      type: String,
    },
    gender: {
      type: String,
    },
    highest_edu: {
      type: String,
    },
    type: {
      type: String || null,
    },
  },
  {
    timestamps: true,
  }
);

const User = client.model("User", UserSchema);

module.exports = User;
