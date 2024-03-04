const mongoose = require("mongoose");
const client = require("../config/connect");

const CompanySchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: true,
  },
  business_idea: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  founded_on: {
    type: String,
    required: true,
  },
  managing_director: {
    type: String,
  },
  parent_org: {
    type: String,
  },
  partner_id: {
    type: [mongoose.Schema.Types.ObjectId], // [Partner._id, Partner._id, Partner._id, ...
    ref: "Partner",
  },
  website: {
    type: String,
  },
  head_office_address: {
    addr_line1: {
      type: String,
      // required: true,
    },
    addr_line2: {
      type: String,
      // required: true,
    },
    addr_number: {
      type: String,
      // required: true,
    },
    city: {
      type: String,
      // required: true,
    },
    state: {
      type: String,
      // required: true,
    },
    country: {
      type: String,
      // required: true,
    },
    pincode: {
      type: String,
      // required: true,
    },
  },
  valuation: {
    type: Number,
    required: true,
  },
  revenue: {
    type: Number,
    required: true,
  },
  roe: {
    type: Number,
  },
  pe_ratio: {
    type: Number,
  },
  book_val: {
    type: Number,
  },
  industry_pe_ratio: {
    type: Number,
  },
  de_ratio: {
    type: Number,
  },
  capital: {
    type: Number,
    required: true,
  },
  licensing: {
    type: String,
  },
  supply_chain: {
    type: [String],
  },
  patent : {
    type : [String],
  },
  trademark : {
    type : [String],
  },
  royalty: {
    type: Number,
  },
  profit : {
    type : Number,
    required : true,
  },
  return_per : {
    type : Number,
  },
  type : {
    type : String,
  },
  image: {
    type: String,
  },
}, {
  timestamps: true,
});

const Company = client.model("Company", CompanySchema);

module.exports = Company;
