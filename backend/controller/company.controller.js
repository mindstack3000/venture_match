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

    // Check if the user already exists
    const companyUser = await User.findOne({ company_name });
    if (companyUser) return res.status(400).json({ msg: "Company already exists" });

    // Create a new user
    const newCompanyUser = new User({
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
    });

    // Save the user
    await newCompanyUser.save();

    if (token) {
      res.status(201).json({
        message: "User register successfully",
        token,
        user_id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        profile_img: newUser.profile_img,
        type: newUser.type,
      });
    } else {
      res.status(400).json({ message: "User register failed" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;