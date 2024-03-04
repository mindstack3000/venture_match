const mongoose = require("mongoose");
const client = require("../config/connect");

const AddressSchema = new mongoose.Schema({
  addr_line1: {
    type: String,
    required: true,
  },
  addr_line2: {
    type: String,
    required: true,
  },
  addr_number: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Address = client.model("Address", AddressSchema);
mongoose.model = Address;
