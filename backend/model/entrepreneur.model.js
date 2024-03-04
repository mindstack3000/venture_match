const mongoose = require("mongoose");
const client = require("../config/connect");

const EntrepreneurSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    company_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
  },
  {
    timestamps: true,
  }
);

const Entrepreneur = client.model("Entrepreneur", EntrepreneurSchema);
mongoose.model = Entrepreneur;
