const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Company = require("../model/company.model");

/*
 *@route  POST /Company/register
 */

/*
  todo user._id
  todo user.name
  todo user.email
  todo user.profile_img
  todo user.type

 */

router.post("/register", async (req, res) => {
  try {
    const {
      company_name,
      business_idea,
      description,
      founded_on,
      managing_director,
      partner,
      parent_org,
      website,
      head_office_address,
      valuation,
      revenue,
      roe,
      pe_ratio,
      book_val,
      industry_pe_ratio,
      de_ratio,
      capital,
      licensing,
      supply_chain,
      patent,
      trademark,
      royalty,
      profit,
      return_per,
      type,
    } = req.body;

    // Check if the company already exists
    const company = await Company.findOne({ company_name });

    if (company) return res.status(400).json({ msg: "Company already exists" });

    // Create a new user
    const newCompany = new Company({
      company_name,
      business_idea,
      description,
      founded_on,
      managing_director,
      partner,
      parent_org,
      website,
      head_office_address,
      valuation,
      revenue,
      roe,
      pe_ratio,
      book_val,
      industry_pe_ratio,
      de_ratio,
      capital,
      licensing,
      supply_chain,
      patent,
      trademark,
      royalty,
      profit,
      return_per,
      type: null,
    });

    // Save the company
    await newCompany.save();
    return 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;