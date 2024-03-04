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
    type: string,
    required: true,
  },
  managing_director: {
    type: String,
  },
  parent_org: {
    type: String,
  },
  partner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Partner",
  },
  website: {
    type: String,
  },
  head_office_address: {
    type: String,
    required: true,
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
  capital_employed: {
    type: Number,
    required: true,
  },
  licensing: {
    type: Boolean,
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
  return : {
    type : Number,
  },
  type : {
    type : String,
  }
}, {
  timestamps: true,
});

const Company = client.model("Company", CompanySchema);

module.exports = Company;
