const mongoose = require("mongoose");
const client = require("../config/connect");

const FeedbackSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Feedback = client.model("Feedback", FeedbackSchema);
mongoose.model = Feedback;
