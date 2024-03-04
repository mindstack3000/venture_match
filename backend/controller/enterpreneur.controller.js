const express = require("express");
const router = express.Router();
const Enterpreneur = require("../model/enterpreneur.model");
const Partner = require("../model/partner.model");
const Company = require("../model/company.model");

/*
 *@route  POST /enterpreneur/register/:id
 */

router.post("/register/:id", async (req, res) => {
  try {
    const {
      company_name,
      business_idea,
      description,
      founded_on,
      managing_director,
      parent_org,
      website,
      partner,
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
      image,
    } = req.body;

    const id = req.params.id;

    const newPartners = await Promise.all(
      partner.map(async (item) => {
        let newPartner = new Partner({
          name: item.name,
          equity: item.equity,
        });

        return await newPartner.save();
      })
    );

    const newCompany = new Company({
      company_name,
      business_idea,
      description,
      founded_on,
      managing_director,
      parent_org,
      partners: newPartners.map((partner) => partner._id),
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
      image,
    });

    await newCompany.save(); // Save the newCompany instance

    const newEnterpreneur = new Enterpreneur({
      user_id: id,
      company_id: newCompany._id,
    });

    await newEnterpreneur.save(); // Save the newEnterpreneur instance

    if(newEnterpreneur){
      res.status(200).json({ message: "Company registered successfully" });
    }

    // You can send a response here if needed
    res.status(200).json({ message: "Company registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
