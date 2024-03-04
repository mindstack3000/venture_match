const mongoose = require("mongoose");
const client = require("../config/connect");

const PartnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    equity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    
  }
);

const User = client.model("Partner", PartnerSchema);

module.exports = User;
